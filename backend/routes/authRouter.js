//backend/routes/authRouter.js
import express from 'express';
import { connectToDatabase } from '../lib/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, artisanId, PhoneNumber, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Oops! The passwords don't match." });
  }
  try {
    const db = await connectToDatabase();
    const [existing] = await db.query(
      'SELECT * FROM users WHERE artisanId = ? OR PhoneNumber = ?',
      [artisanId, PhoneNumber]
    );
    if (existing.length) {
      return res.status(409).json({ message: "Artisan already has an account." });
    }
    const username = `${firstName} ${lastName}`;
    const hashed = await bcrypt.hash(password, 10);
    const [result] = await db.query(
      "INSERT INTO users (username, artisanId, PhoneNumber, password) VALUES (?, ?, ?, ?)",
      [username, artisanId, PhoneNumber, hashed]
    );
    const [[newUser]] = await db.query("SELECT * FROM users WHERE id = ?", [result.insertId]);
    // Sign both id and artisanId into the token:
    const token = jwt.sign(
      { id: newUser.id, artisanId: newUser.artisanId },
      process.env.JWT_KEY,
      { expiresIn: '3h' }
    );
    return res.status(201).json({
      message: "Welcome aboard!",
      token,
      username: newUser.username,
      artisanId: newUser.artisanId
    });
  } catch (err) {
    return res.status(500).json({ message: `Error: ${err.message}` });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { PhoneNumber, password } = req.body;
  try {
    const db = await connectToDatabase();
    const [users] = await db.query('SELECT * FROM users WHERE PhoneNumber = ?', [PhoneNumber]);
    if (!users.length) {
      return res.status(404).json({ message: "No account with that phone number." });
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
      { expiresIn: '3h' }
    );
    return res.status(200).json({
      message: "Login successful!",
      token,
      username: user.username,
      artisanId: user.artisanId
    });
  } catch (err) {
    return res.status(500).json({ message: `Server error: ${err.message}` });
  }
});

// Middleware for token verification (sets both userId & artisanId)
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).json({ message: "No token provided." });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userId = decoded.id;
    req.artisanId = decoded.artisanId;    // now we have artisanId
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

// Keep only the PUT route for safe updates
// In authRouter.js
router.put('/profile', verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    await db.query(
      'UPDATE users SET username = ?, specialization = ?, PhoneNumber = ? WHERE artisanId = ?',
      [req.body.username, req.body.specialization, req.body.PhoneNumber, req.artisanId]
    );
    res.status(200).json({ 
      message: 'Profile updated successfully',
      updatedFields: {
        username: req.body.username,
        specialization: req.body.specialization,
        contact: req.body.contact
      }
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ 
      message: 'Database update failed',
      error: error.message
    });
  }
});

export default router;
