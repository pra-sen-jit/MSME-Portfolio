import express from "express";
import { connectToDatabase } from "../lib/db.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { verifyToken } from "./authRouter.js";

const router = express.Router();

// ES module __dirname shim
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer config with improved filename handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads/")),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// POST /products - Create new product
router.post(
  "/",
  verifyToken,
  upload.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
    { name: "image4" },
    { name: "image5" },
  ]),
  async (req, res) => {
    try {
      const artisanId = req.artisanId;
      const {
        productName,
        productPrice,
        material,
        height,
        width,
        weight,
        productDescription,
      } = req.body;

      if (!productName) {
        return res.status(400).json({ message: "Product name is required" });
      }

      const db = await connectToDatabase();

      // Enforce maximum 3 products per artisan
      const [[{ cnt }]] = await db.query(
        "SELECT COUNT(*) AS cnt FROM products WHERE artisanId = ?",
        [artisanId]
      );
      if (cnt >= 3) {
        return res
          .status(400)
          .json({ message: "Maximum of 3 products allowed" });
      }

      // Store only filenames without path
      const imageFields = {};
      for (let i = 1; i <= 5; i++) {
        const field = `image${i}`;
        if (req.files[field]?.[0]) {
          imageFields[field] = req.files[field][0].filename;
        }
      }

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
          imageFields.image1 || null,
          imageFields.image2 || null,
          imageFields.image3 || null,
          imageFields.image4 || null,
          imageFields.image5 || null,
          productDescription || null,
        ]
      );

      return res.status(201).json({
        message: "Product created",
        productId: result.insertId,
      });
    } catch (err) {
      console.error("POST /products error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

// PUT /products/:productId - Update product
router.put(
  "/:productId",
  verifyToken,
  upload.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
    { name: "image4" },
    { name: "image5" },
  ]),
  async (req, res) => {
    try {
      const productId = req.params.productId;
      const artisanId = req.artisanId;
      const db = await connectToDatabase();

      if (isNaN(productId)) {
        return res.status(400).json({ message: "Invalid product ID" });
      }

      // Verify product ownership
      const [[product]] = await db.query(
        "SELECT * FROM products WHERE id = ? AND artisanId = ?",
        [productId, artisanId]
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Process image updates
      const imageUpdates = {};
      for (let i = 1; i <= 5; i++) {
        const field = `image${i}`;
        if (req.files[field]?.[0]) {
          imageUpdates[field] = req.files[field][0].filename;
        }
      }

      const updateData = {
        productName: req.body.productName || product.productName,
        productPrice: req.body.productPrice || product.productPrice,
        material: req.body.material || product.material,
        height: req.body.height || product.height,
        width: req.body.width || product.width,
        weight: req.body.weight || product.weight,
        productDescription:
          req.body.productDescription || product.productDescription,
        ...imageUpdates,
      };

      await db.query(
        `UPDATE products SET 
          productName = ?, productPrice = ?, material = ?,
          height = ?, width = ?, weight = ?,
          image1 = ?, image2 = ?, image3 = ?,
          image4 = ?, image5 = ?, productDescription = ?
         WHERE id = ?`,
        [
          updateData.productName,
          updateData.productPrice,
          updateData.material,
          updateData.height,
          updateData.width,
          updateData.weight,
          updateData.image1 || product.image1,
          updateData.image2 || product.image2,
          updateData.image3 || product.image3,
          updateData.image4 || product.image4,
          updateData.image5 || product.image5,
          updateData.productDescription,
          productId,
        ]
      );

      return res.status(200).json({ message: "Product updated successfully" });
    } catch (err) {
      console.error("PUT /products error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

// DELETE /products/:productId — remove a single row
router.delete("/:productId", verifyToken, async (req, res) => {
  try {
    const artisanId = req.artisanId;
    const productId = req.params.productId;
    const db = await connectToDatabase();
    await db.query("DELETE FROM products WHERE id = ? AND artisanId = ?", [
      productId,
      artisanId,
    ]);
    return res.status(200).json({ message: "Product deleted successfully." });
  } catch (err) {
    console.error("DELETE /products/:productId error:", err);
    return res.status(500).json({ message: err.message });
  }
});
// Add after DELETE endpoint
router.post("/unlist-product/:productId", verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    await db.query(
      "UPDATE products SET is_listed = FALSE WHERE id = ? AND artisanId = ?",
      [req.params.productId, req.artisanId]
    );

    // Check remaining products
    const [[{ count }]] = await db.query(
      "SELECT COUNT(*) AS count FROM products WHERE artisanId = ? AND is_listed = TRUE",
      [req.artisanId]
    );

    if (count < 3) {
      await db.query("UPDATE users SET listed = FALSE WHERE artisanId = ?", [
        req.artisanId,
      ]);
    }

    res.json({ message: "Product unlisted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
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

// Update the list-products endpoint
router.post("/list-products", verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();

    // Verify exactly 3 products exist (regardless of listing status)
    const [[{ count }]] = await db.query(
      `SELECT COUNT(*) AS count FROM products 
       WHERE artisanId = ?`,
      [req.artisanId]
    );

    if (count !== 3) {
      return res.status(400).json({
        message: "You must have exactly 3 products to list",
      });
    }

    // Update database
    await db.query(
      `
      UPDATE products 
      SET is_listed = TRUE, listed_at = NOW() 
      WHERE artisanId = ?
    `,
      [req.artisanId]
    );

    await db.query(
      `
      UPDATE users 
      SET listed = TRUE 
      WHERE artisanId = ?
    `,
      [req.artisanId]
    );

    res.json({ message: "Products listed successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
