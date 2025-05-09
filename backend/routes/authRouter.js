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
    const [existingUsers] = await db.query(
      'SELECT * FROM users WHERE artisanId = ? OR PhoneNumber = ?',
      [artisanId, PhoneNumber]
    );

    if (existingUsers.length > 0) {
      return res.status(409).json({ message: "Looks like this artisan already has an account." });
    }

    const username = `${firstName} ${lastName}`;
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      "INSERT INTO users (username, artisanId, PhoneNumber, password) VALUES (?, ?, ?, ?)",
      [username, artisanId, PhoneNumber, hashedPassword]
    );

    const [newUserData] = await db.query("SELECT * FROM users WHERE id = ?", [result.insertId]);
    const newUser = newUserData[0];

    const token = jwt.sign({ id: newUser.id, artisanId }, process.env.JWT_KEY, { expiresIn: '3h' });

    return res.status(201).json({
      message: "Welcome aboard!",
      token,
      username: newUser.username,
      artisanId: newUser.artisanId
    });

  } catch (err) {
    return res.status(500).json({ message: `Something went wrong: ${err.message}` });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { PhoneNumber, password } = req.body;

  try {
    const db = await connectToDatabase();
    const [users] = await db.query('SELECT * FROM users WHERE PhoneNumber = ?', [PhoneNumber]);

    if (users.length === 0) {
      return res.status(404).json({ message: "No account found with that phone number." });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password. Try again?" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: '3h' });

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

// Middleware for user token verification
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).json({ message: "No token provided." });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

export default router;