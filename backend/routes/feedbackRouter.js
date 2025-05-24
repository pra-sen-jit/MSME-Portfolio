import express from "express";
import { connectToDatabase } from "../lib/db.js";

const router = express.Router();

// Get all feedback
router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [feedbacks] = await db.query(
      "SELECT * FROM feedback ORDER BY created_at DESC"
    );
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedback" });
  }
});

// Get feedback by artisanId
router.get("/:artisanId", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [feedbacks] = await db.query(
      "SELECT * FROM feedback WHERE artisanId = ? ORDER BY created_at DESC",
      [req.params.artisanId]
    );
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedback" });
  }
});

// Submit new feedback
router.post("/", async (req, res) => {
  const { name, message, artisanId } = req.body;
  if (!name || !message || !artisanId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const db = await connectToDatabase();
    await db.query(
      "INSERT INTO feedback (name, message, artisanId) VALUES (?, ?, ?)",
      [name, message, artisanId]
    );
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting feedback" });
  }
});

export default router;
