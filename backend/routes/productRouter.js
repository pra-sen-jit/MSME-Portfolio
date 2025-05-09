// /backend/routes/productRouter.js
import express from "express";
import { connectToDatabase } from "../lib/db.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// For ES Modules, define __dirname:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Multer storage (saves files to /uploads folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage });

// POST /products - Insert new product
router.post(
  "/",
  // Expect fields: image1 through image5
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
    { name: "image5", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      // Get text fields from the body
      const {
        artisanId,
        productName,
        productPrice,
        material,
        height,
        width,
        weight,
        productDescription
      } = req.body;

      // Extract file paths from req.files
      const image1 = req.files.image1 ? req.files.image1[0].path : null;
      const image2 = req.files.image2 ? req.files.image2[0].path : null;
      const image3 = req.files.image3 ? req.files.image3[0].path : null;
      const image4 = req.files.image4 ? req.files.image4[0].path : null;
      const image5 = req.files.image5 ? req.files.image5[0].path : null;

      // Validate required fields
      if (!artisanId || !productName) {
        return res
          .status(400)
          .json({ message: "artisanId and productName are required" });
      }

      // Insert into products table
      const db = await connectToDatabase();
      const [result] = await db.query(
        `INSERT INTO products (
           artisanId,
           productName,
           productPrice,
           material,
           height,
           width,
           weight,
           image1,
           image2,
           image3,
           image4,
           image5,
           productDescription
         )
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          artisanId,
          productName,
          productPrice || null,
          material || null,
          height || null,
          width || null,
          weight || null,
          image1 || null,
          image2 || null,
          image3 || null,
          image4 || null,
          image5 || null,
          productDescription || null
        ]
      );

      return res
        .status(201)
        .json({ message: "Product created", productId: result.insertId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
  }
);

export default router;