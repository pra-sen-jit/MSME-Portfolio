// backend/routes/productRouter.js
import express from "express";
import { connectToDatabase } from "../lib/db.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { verifyToken } from "./authRouter.js";  // <-- same middleware

const router = express.Router();

// ES module __dirname shim
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads/")),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + Math.round(Math.random() * 1e9) + "-" + file.originalname)
});
const upload = multer({ storage });

// POST /products — one slot at a time, ≤3 per artisan
router.post(
  "/",
  verifyToken,
  upload.fields([
    { name: "image1" }, { name: "image2" },
    { name: "image3" }, { name: "image4" },
    { name: "image5" }
  ]),
  async (req, res) => {
    try {
      const artisanId = req.artisanId;
      const { productName, productPrice, material, height, width, weight, productDescription } = req.body;
      if (!productName) {
        return res.status(400).json({ message: "productName is required." });
      }
      const db = await connectToDatabase();
      // enforce ≤3
      const [[{ cnt }]] = await db.query(
        "SELECT COUNT(*) AS cnt FROM products WHERE artisanId = ?",
        [artisanId]
      );
      if (cnt >= 3) {
        return res.status(400).json({ message: "Maximum of 3 products allowed." });
      }
      // file paths
      const image1 = req.files.image1?.[0].filename ? `/uploads/${req.files.image1[0].filename}` : null;
      const image2 = req.files.image2?.[0].filename ? `/uploads/${req.files.image2[0].filename}` : null;
      const image3 = req.files.image3?.[0].filename ? `/uploads/${req.files.image3[0].filename}` : null;
      const image4 = req.files.image4?.[0].filename ? `/uploads/${req.files.image4[0].filename}` : null;
      const image5 = req.files.image5?.[0].filename ? `/uploads/${req.files.image5[0].filename}` : null;
      const [result] = await db.query(
        `INSERT INTO products (
           artisanId, productName, productPrice, material,
           height, width, weight,
           image1, image2, image3, image4, image5,
           productDescription
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          artisanId,
          productName,
          productPrice || null,
          material || null,
          height || null,
          width || null,
          weight || null,
          image1,
          image2,
          image3,
          image4,
          image5,
          productDescription || null
        ]
      );
      return res.status(201).json({ message: "Product created", productId: result.insertId });
    } catch (err) {
      console.error("POST /products error:", err);
      return res.status(500).json({ message: err.message });
    }
  }
);

// DELETE /products/:productId — remove a single row
router.delete("/:productId", verifyToken, async (req, res) => {
  try {
    const artisanId = req.artisanId;
    const productId = req.params.productId;
    const db = await connectToDatabase();
    await db.query(
      "DELETE FROM products WHERE id = ? AND artisanId = ?",
      [productId, artisanId]
    );
    return res.status(200).json({ message: "Product deleted successfully." });
  } catch (err) {
    console.error("DELETE /products/:productId error:", err);
    return res.status(500).json({ message: err.message });
  }
});

// GET /products/:artisanId — list up to 3 products
router.get("/:artisanId", verifyToken, async (req, res) => {
  try {
    // ensure the token’s artisanId matches the param
    if (req.params.artisanId !== req.artisanId) {
      return res.status(403).json({ message: "Forbidden." });
    }
    const db = await connectToDatabase();
    const [rows] = await db.query(
      "SELECT * FROM products WHERE artisanId = ? ORDER BY id ASC LIMIT 3",
      [req.artisanId]
    );
    return res.status(200).json(rows);
  } catch (err) {
    console.error("GET /products/:artisanId error:", err);
    return res.status(500).json({ message: err.message });
  }
});

export default router;
