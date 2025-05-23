//backend/routes/authRouter.js
import express from "express";
import { connectToDatabase } from "../lib/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const {
    firstName,
    lastName,
    adminPassKey,
    PhoneNumber,
    password,
    confirmPassword,
  } = req.body;
  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: "Oops! The passwords don't match." });
  }
  try {
    const db = await connectToDatabase();
    // Verify Admin Pass Key
    const [adminRows] = await db.query('SELECT adminPassKey FROM admindata LIMIT 1');
    if (!adminRows.length || adminRows[0].adminPassKey !== adminPassKey) {
      return res.status(403).json({ message: "Invalid Admin Pass Key." });
    }
    // Check if the Mobile Number already exists
    const [existing] = await db.query(
      "SELECT * FROM users WHERE PhoneNumber = ?",
      [PhoneNumber]
    );
    if (existing.length) {
      return res.status(409).json({ message: "Phone number already registered." });
    }
    const username = `${firstName} ${lastName}`;
    const hashed = await bcrypt.hash(password, 10);
     const [result] = await db.query(
      "INSERT INTO users (username, PhoneNumber, password) VALUES (?, ?, ?)",
      [username, PhoneNumber, hashed]
    );
    // Generate artisanId from insertId
    const generatedArtisanId = `ART${String(result.insertId).padStart(5, '0')}`;
    await db.query(
      "UPDATE users SET artisanId = ? WHERE id = ?",
      [generatedArtisanId, result.insertId]
    );

    const [[newUser]] = await db.query("SELECT * FROM users WHERE id = ?", [
      result.insertId,
    ]);
    // Sign both id and artisanId into the token:
    const token = jwt.sign(
      { id: newUser.id, artisanId: newUser.artisanId },
      process.env.JWT_KEY,
      { expiresIn: "7d" }
    );
    return res.status(201).json({
      message: "Welcome aboard!",
      token,
      username: newUser.username,
      artisanId: newUser.artisanId,
    });
  } catch (err) {
    return res.status(500).json({ message: `Error: ${err.message}` });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { PhoneNumber, password } = req.body;
  try {
    const db = await connectToDatabase();
    const [users] = await db.query(
      "SELECT * FROM users WHERE PhoneNumber = ?",
      [PhoneNumber]
    );
    if (!users.length) {
      return res
        .status(404)
        .json({ message: "No account with that phone number." });
    }
    const user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Incorrect password." });
    }
    // Sign both id and artisanId here too:
    const token = jwt.sign(
      { id: user.id, artisanId: user.artisanId },
      process.env.JWT_KEY,
      { expiresIn: "7d" }
    );
    return res.status(200).json({
      message: "Login successful!",
      token,
      username: user.username,
      artisanId: user.artisanId,
    });
  } catch (err) {
    return res.status(500).json({ message: `Server error: ${err.message}` });
  }
});
// Add admin login route
router.post('/admin/login', async (req, res) => {  // <-- Ensure this line is exactly like this
  const { adminId, adminPassword } = req.body;
  try {
    const db = await connectToDatabase();
    const [admins] = await db.query(
      'SELECT * FROM admindata WHERE adminId = ?',
      [adminId]
    );

    if (!admins.length) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const admin = admins[0];
    const match = await bcrypt.compare(adminPassword, admin.adminPassword);
    
    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin.id, adminId: admin.adminId, role: 'admin' },
      process.env.JWT_KEY,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      message: 'Admin login successful',
      token,
      adminId: admin.adminId
    });
  } catch (err) {
    return res.status(500).json({ message: `Server error: ${err.message}` });
  }
});


// Ensure verifyToken middleware properly handles JWT errors
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).json({ message: "No token provided." });
  
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ 
        message: err.name === 'TokenExpiredError' 
          ? "Token expired" 
          : "Invalid token"
      });
    }
    req.userId = decoded.id;
    if(decoded.role === 'admin') {
      req.adminId = decoded.adminId;
      req.role = 'admin';
    } else {
      req.artisanId = decoded.artisanId;
      req.role = 'artisan';
    }
    next();
  });
};

// Keep only the PUT route for safe updates
// In authRouter.js

// Add this route before the PUT profile route
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [[profile]] = await db.query(
      "SELECT username AS name, specialization, PhoneNumber AS contact, artisanId FROM users WHERE artisanId = ?",
      [req.artisanId]
    );
    
    res.status(200).json({
      profile: {
        ...profile,
        specialization: profile.specialization || "Not Specified",
        contact: profile.contact || "No contact provided"
      }
    });
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
});

router.put("/profile", verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    
    // Only update specialization and phone number
    await db.query(
      "UPDATE users SET specialization = ?, PhoneNumber = ? WHERE artisanId = ?",
      [
        req.body.specialization,
        req.body.PhoneNumber,
        req.artisanId,
      ]
    );

    // Get updated profile
    const [[updatedProfile]] = await db.query(
      "SELECT username, specialization, PhoneNumber, artisanId FROM users WHERE artisanId = ?",
      [req.artisanId]
    );

    res.status(200).json({
      message: "Profile updated successfully",
      profile: {
        name: updatedProfile.username, // Keep using original username
        specialization: updatedProfile.specialization,
        contact: updatedProfile.PhoneNumber,
        artisanId: updatedProfile.artisanId
      }
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({
      message: "Database update failed",
      error: error.message,
    });
  }
});

export default router;
