import express from "express";
import { connectToDatabase } from "../lib/db.js";

const router = express.Router();

// Get all feedback
router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [feedbacks] = await db.query(`
      SELECT 
        f.*,
        CASE 
          WHEN f.artisanId IS NOT NULL THEN u.username 
          ELSE f.artisanName 
        END as artisanName,
        f.created_at
      FROM feedback f
      LEFT JOIN users u ON f.artisanId = u.artisanId
      ORDER BY f.created_at DESC
    `);
    res.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ message: "Error fetching feedback" });
  }
});

// Get feedback by artisanId
router.get("/:artisanId", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [feedbacks] = await db.query(
      `
      SELECT 
        f.*,
        CASE 
          WHEN f.artisanId IS NOT NULL THEN u.username 
          ELSE f.artisanName 
        END as artisanName,
        f.created_at
      FROM feedback f
      LEFT JOIN users u ON f.artisanId = u.artisanId
      WHERE f.artisanId = ? 
      ORDER BY f.created_at DESC
    `,
      [req.params.artisanId]
    );
    res.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ message: "Error fetching feedback" });
  }
});

// Submit new feedback
router.post("/", async (req, res) => {
  const { name, email, artisanName, feedback } = req.body;
  if (!name || !email || !feedback) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const db = await connectToDatabase();
    await db.query(
      "INSERT INTO feedback (name, email, artisanName, message) VALUES (?, ?, ?, ?)",
      [name, email, artisanName || null, feedback]
    );
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ message: "Error submitting feedback" });
  }
});

export default router;
