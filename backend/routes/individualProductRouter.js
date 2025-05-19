import express from "express";
import { connectToDatabase } from "../lib/db.js";

const router = express.Router();

// Get single product details
router.get("/:productId", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [products] = await db.query(
      `
      SELECT 
        p.*,
        CONCAT('${process.env.BACKEND_URL}/uploads/', p.image1) as image1,
        CONCAT('${process.env.BACKEND_URL}/uploads/', p.image2) as image2,
        CONCAT('${process.env.BACKEND_URL}/uploads/', p.image3) as image3,
        CONCAT('${process.env.BACKEND_URL}/uploads/', p.image4) as image4,
        CONCAT('${process.env.BACKEND_URL}/uploads/', p.image5) as image5,
        u.username,
        u.specialization,
        u.PhoneNumber,
        u.profileImage
      FROM products p
      JOIN users u ON p.artisanId = u.artisanId
      WHERE p.id = ?
    `,
      [req.params.productId]
    );

    if (products.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = {
      ...products[0],
      images: [
        products[0].image1,
        products[0].image2,
        products[0].image3,
        products[0].image4,
        products[0].image5,
      ].filter((img) => img !== null),
    };

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get related products
router.get("/:productId/related", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [products] = await db.query(
      `
      SELECT 
        id,
        productName,
        productPrice,
        CONCAT('${process.env.BACKEND_URL}/uploads/', image1) AS imageUrl
      FROM products
      WHERE artisanId = (
        SELECT artisanId FROM products WHERE id = ?
      )
      AND id != ?
      AND is_listed = TRUE
      LIMIT 4
      `,
      [req.params.productId, req.params.productId]
    );

    res.json(products);
  } catch (error) {
    console.error("Error fetching related products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
