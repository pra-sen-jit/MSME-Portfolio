import express from "express";
import { connectToDatabase } from "../lib/db.js";
import { verifyToken } from "./authRouter.js";
import multer from "multer";
import bcrypt from "bcrypt";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Get admin profile
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [admin] = await db.query(
      'SELECT adminId, name, phonenumber, email, address, profileimage, adminPassword, adminPassKey FROM admindata WHERE adminId = ?',
      [req.adminId]
    );
    
    if (!admin || admin.length === 0) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    res.json({
      success: true,
      ...admin[0],
      phoneNumber: admin[0].phonenumber,
      emailId: admin[0].email,
      profileImage: admin[0].profileimage
    });
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update admin profile
router.put('/profile', verifyToken, upload.single('profileImage'), async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { name, address, phoneNumber, emailId } = req.body;
    
    const [currentAdmin] = await db.query(
      'SELECT * FROM admindata WHERE adminId = ?',
      [req.adminId]
    );

    const updateData = {
      name: name || currentAdmin[0].name,
      address: address || currentAdmin[0].address,
      phonenumber: phoneNumber || currentAdmin[0].phonenumber,
      email: emailId || currentAdmin[0].email,
      profileimage: req.file ? `/uploads/${req.file.filename}` : currentAdmin[0].profileimage
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
        updateData.phonenumber,
        updateData.email,
        updateData.profileimage,
        req.adminId
      ]
    );

    res.json({
      success: true,
      message: 'Profile updated successfully',
      name: updateData.name,
      phoneNumber: updateData.phonenumber,
      emailId: updateData.email,
      address: updateData.address,
      profileimage: updateData.profileimage
    });
    
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Update failed',
      error: error.message 
    });
  }
});

// Add these new routes
router.put('/update-password', verifyToken, async (req, res) => {
  try {
    const { newPassword } = req.body;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    const db = await connectToDatabase();
    await db.query(
      'UPDATE admindata SET adminPassword = ? WHERE adminId = ?',
      [hashedPassword, req.adminId]
    );

    res.json({ 
      success: true,
      message: 'Password updated successfully'
    });
  } catch (error) {
    console.error('Password update error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Password update failed'
    });
  }
});

router.put('/update-passkey', verifyToken, async (req, res) => {
  try {
    const { newPasskey } = req.body;
    
    const db = await connectToDatabase();
    await db.query(
      'UPDATE admindata SET adminPassKey = ? WHERE adminId = ?',
      [newPasskey, req.adminId]
    );

    res.json({ 
      success: true,
      message: 'Passkey updated successfully'
    });
  } catch (error) {
    console.error('Passkey update error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Passkey update failed'
    });
  }
});

export default router;