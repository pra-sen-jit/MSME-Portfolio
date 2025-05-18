import express from "express";
import { connectToDatabase } from "../lib/db.js";

const router = express.Router();

// Get all artisans (public route)
router.get("/artisans", async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const [users] = await connection.query(
      "SELECT id, username as name, artisanId, PhoneNumber as contact, specialization FROM users WHERE artisanId IS NOT NULL"
    );
    
    // Format the data to match the frontend expectations
    const formattedUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      specialization: user.specialization || 'Not specified',
      contact: user.contact,
      artisanId: user.artisanId
    }));

    res.json({ success: true, data: formattedUsers });
  } catch (error) {
    console.error("Error fetching artisans:", error);
    res.status(500).json({ success: false, message: "Failed to fetch artisans" });
  }
});

export default router;