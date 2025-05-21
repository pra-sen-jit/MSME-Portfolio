import express from "express";
import { connectToDatabase } from "../lib/db.js";
import { verifyToken } from "./authRouter.js";
import multer from "multer";
const upload = multer({ dest: 'uploads/' });

const router = express.Router();
// Get admin profile

router.get('/admin/profile', verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [admin] = await db.query(
      'SELECT * FROM admindata WHERE adminId = ?',
      [req.adminId]
    );
    res.json(admin[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add proper file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

router.put('/admin/profile', verifyToken, upload.single('profileImage'), async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { name, address, phoneNumber, emailId } = req.body;
    
    // Get existing data first
    const [currentAdmin] = await db.query(
      'SELECT * FROM admindata WHERE adminId = ?',
      [req.adminId]
    );

    const updateData = {
      name: name || currentAdmin[0].name,
      address: address || currentAdmin[0].address,
      phoneNumber: phoneNumber || currentAdmin[0].phoneNumber,
      emailId: emailId || currentAdmin[0].emailId,
      profileImage: req.file ? `/uploads/${req.file.filename}` : currentAdmin[0].profileImage,
    };

    await db.query(
      `UPDATE admindata SET 
        name = ?,
        address = ?,
        phonenumber = ?,
        email = ?,
        profileimage = ?
       WHERE adminId = ?`,
      [
        updateData.name,
        updateData.address,
        updateData.phoneNumber,
        updateData.emailId,
        updateData.profileImage,
        req.adminId
      ]
    );

    res.json({ message: 'Profile updated', data: updateData });
  } catch (error) {
    res.status(500).json({ message: 'Update failed' });
  }
});
export default router;
