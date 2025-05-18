import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function ProductsSection() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 0.5; // Reduced speed for smoother animation

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/featured/featured-products`);
        if (response.data.success) {
          // Duplicate the products to create a seamless loop
          setFeaturedProducts([...response.data.products, ...response.data.products]);
        } else {
          throw new Error(response.data.message || "Failed to fetch featured products");
        }
      } catch (err) {
        console.error("Error fetching featured products:", err);
        setError(err.message);
        setFeaturedProducts([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFeaturedProducts();
  }, []);

  useEffect(() => {
    if (!sliderRef.current || featuredProducts.length === 0) return;

    let animationFrameId;
    let lastTimestamp = performance.now();

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused) {
        setScrollPosition((prev) => {
          const newPosition = prev + (scrollSpeed * delta) / 16;
          const sliderWidth = sliderRef.current.scrollWidth / 2; // Since we duplicated the products
          
          // Reset position before reaching the end to avoid jump
          if (newPosition >= sliderWidth) {
            return 0;
          }
          return newPosition;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, featuredProducts]);

  // Render loading, error, or empty states...
  // (Keep your existing loading/error/empty state rendering code here)

  return (
    <section
      className="flex flex-col items-center justify-center w-full px-6 py-6 bg-white overflow-hidden"
      aria-labelledby="products-heading"
    >
      <h2
        id="products-heading"
        className="text-4xl font-bold text-center text-black mb-10 max-md:text-3xl"
      >
        Featured Products
      </h2>

      <div
        className="relative w-full overflow-x-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={containerRef}
      >
        <div
          ref={sliderRef}
          className="flex gap-10 w-max"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isPaused ? "transform 0.5s ease" : "none",
          }}
        >
          {featuredProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} className="w-[300px] flex-shrink-0">
              <ProductCard
                id={product.id}
                image={`${backendUrl}${product.mainImage}`}
                title={product.productName}
                artisan={product.artisanName}
                price={product.productPrice}
              />
            </div>
          ))}
        </div>
      </div>

      <Link 
        to="/products" 
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
      >
        View All Products
      </Link>
    </section>
  );
}

export default ProductsSection;