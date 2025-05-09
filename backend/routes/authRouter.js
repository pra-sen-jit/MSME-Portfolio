import express from "express";
import { connectToDatabase } from "../lib/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

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
    return res.status(400).json({ message: "Passwords do not match" });
  }
  try {
    const db = await connectToDatabase();
    //check if Artisan (using artisanId) already exsisits
    const [rows] = await db.query(
      "SELECT * FROM users WHERE artisanId = ? OR PhoneNumber = ?",
      [artisanId, PhoneNumber]
    );
    if (rows.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Combine firstName and lastName to create username
    const username = `${firstName} ${lastName}`;
    const hashPassword = await bcrypt.hash(password, 10);
    // Insert the new user
    const [insertResult] = await db.query(
      "INSERT INTO users (username, artisanId, PhoneNumber, password) VALUES (?, ?, ?, ?)",
      [username, artisanId, PhoneNumber, hashPassword]
    );
    // insertResult.insertId is the newly created user's primary key

    // Now fetch that newly inserted row to get the actual 'id'
    const [newUserRows] = await db.query("SELECT * FROM users WHERE id = ?", [
      insertResult.insertId,
    ]);
    const newUser = newUserRows[0];

    // sign a token with the new user’s ID
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_KEY, {
      expiresIn: "3h",
    });

    // Return everything you want (including artisanId from DB)
    return res.status(201).json({
      message: "User created successfully",
      token: token,
      username: newUser.username,
      artisanId: newUser.artisanId,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { PhoneNumber, password } = req.body;
  try {
    const db = await connectToDatabase();
    const [rows] = await db.query("SELECT * FROM users WHERE PhoneNumber = ?", [
      PhoneNumber,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "user not existed" });
    }
    const isMatch = await bcrypt.compare(password, rows[0].password);
    if (!isMatch) {
      return res.status(401).json({ message: "wrong password" });
    }
    const token = jwt.sign({ id: rows[0].id }, process.env.JWT_KEY, {
      expiresIn: "3h",
    });

    // Return both the token and the username for frontend use
    return res.status(200).json({
      token: token,
      username: rows[0].username,
      artisanId: rows[0].artisanId,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

// Middleware to verify token (for protected routes)
const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(403).json({ message: "No Token Provided" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export default router;
export { verifyToken };

// // Middleware to verify token (for protected routes)
// const verifyToken = async (req, res, next) => {
//     try {
//         const token = req.headers['authorization'].split(' ')[1];
//         if(!token) {
//             return res.status(403).json({message: "No Token Provided"})
//         }
//         const decoded = jwt.verify(token, process.env.JWT_KEY)
//         req.userId = decoded.id;
//         next()
//     }  catch(err) {
//         return res.status(500).json({message: "server error"})
//     }
// }

// export default router;
