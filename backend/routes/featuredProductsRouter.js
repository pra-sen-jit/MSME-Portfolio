import express from "express";
import { connectToDatabase } from "../lib/db.js";

const router = express.Router();

// Get random featured products
router.get("/featured-products", async (req, res) => {
  try {
    const db = await connectToDatabase();
    
    // Get 5 random listed products with artisan info
    const [products] = await db.query(`
      SELECT 
        p.id,
        p.productName,
        p.productPrice,
        p.image1,
        p.image2,
        p.image3,
        p.image4,
        p.image5,
        p.productDescription,
        u.username as artisanName,
        u.artisanId
      FROM products p
      JOIN users u ON p.artisanId = u.artisanId
      WHERE p.is_listed = TRUE
      ORDER BY RAND()
      LIMIT 5
    `);
    
    // Format the response
    const formattedProducts = products.map(product => ({
      ...product,
      // Use the first available image
      mainImage: product.image1 || product.image2 || product.image3 || 
                product.image4 || product.image5 || '/default-product-image.jpg'
    }));

    // If we have less than 4 products, duplicate some to make the slider work
    if (formattedProducts.length < 4) {
      const needed = 4 - formattedProducts.length;
      for (let i = 0; i < needed; i++) {
        formattedProducts.push(formattedProducts[i % formattedProducts.length]);
      }
    }
    
    res.json({
      success: true,
      products: formattedProducts
    });
  } catch (error) {
    console.error("Error fetching featured products:", error);
    res.status(500).json({ 
      success: false,
      message: "Error fetching featured products" 
    });
  }
});

export default router;