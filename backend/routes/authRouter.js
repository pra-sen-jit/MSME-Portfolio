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
    artisanId,
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
    const [existing] = await db.query(
      "SELECT * FROM users WHERE artisanId = ? OR PhoneNumber = ?",
      [artisanId, PhoneNumber]
    );
    if (existing.length) {
      return res
        .status(409)
        .json({ message: "Artisan already has an account." });
    }
    const username = `${firstName} ${lastName}`;
    const hashed = await bcrypt.hash(password, 10);
    const [result] = await db.query(
      "INSERT INTO users (username, artisanId, PhoneNumber, password) VALUES (?, ?, ?, ?)",
      [username, artisanId, PhoneNumber, hashed]
    );
    const [[newUser]] = await db.query("SELECT * FROM users WHERE id = ?", [
      result.insertId,
    ]);
    // Sign both id and artisanId into the token:
    const token = jwt.sign(
      { id: newUser.id, artisanId: newUser.artisanId },
      process.env.JWT_KEY,
      { expiresIn: "3h" }
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
      { expiresIn: "3h" }
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

// Ensure verifyToken middleware properly handles JWT errors
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader)
    return res.status(403).json({ message: "No token provided." });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message:
          err.name === "TokenExpiredError" ? "Token expired" : "Invalid token",
      });
    }
    req.userId = decoded.id;
    req.artisanId = decoded.artisanId;
    next();
  });
};

// Keep only the PUT route for safe updates
router.put("/profile", verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    let { specialization, contact } = req.body;

    // Validation
    if (!contact || contact.length !== 10) {
      return res.status(400).json({
        message: "Valid 10-digit contact number required",
      });
    }

    // Clean specialization
    specialization = specialization?.trim() || null;

    // Check if contact exists for other users
    const [[existing]] = await db.query(
      `SELECT id FROM users 
       WHERE PhoneNumber = ? AND artisanId != ?`,
      [contact, req.artisanId]
    );

    if (existing) {
      return res.status(409).json({
        message: "Contact number already registered to another artisan",
      });
    }

    // Update database
    await db.query(
      `UPDATE users SET
        specialization = ?,
        PhoneNumber = ?
       WHERE artisanId = ?`,
      [specialization, contact, req.artisanId]
    );

    // Return updated profile
    const [[updatedUser]] = await db.query(
      `SELECT 
        username as name,
        COALESCE(specialization, 'Not Specified') as specialization,
        PhoneNumber as contact
       FROM users WHERE artisanId = ?`,
      [req.artisanId]
    );

    res.json({
      message: "Profile updated successfully",
      profile: updatedUser,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({
      message: error.message.includes("Duplicate")
        ? "Contact number already exists"
        : "Server error",
    });
  }
});

router.get("/profile", verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [[user]] = await db.query(
      "SELECT username as name, specialization, PhoneNumber as contact, artisanId " +
        "FROM users WHERE artisanId = ?",
      [req.artisanId]
    );

    if (!user) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({ profile: user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
});

export default router;
