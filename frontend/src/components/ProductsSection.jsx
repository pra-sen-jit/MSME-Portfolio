import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

function ProductsSection() {
  const products = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f130a4a975bede490244df79d209a58ded7a1c95?placeholderIfAbsent=true",
      title: "Silver Earrings",
      artisan: "Mention Artisan name",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7254d8a17f555b0617febac724b6101528ba7dc8?placeholderIfAbsent=true",
      title: "Silver Necklace",
      artisan: "Mention Artisan name",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3227f2a1432ceb9bc223338c13d224b68f4f236d?placeholderIfAbsent=true",
      title: "Silver Idol",
      artisan: "Mention Artisan name",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f130a4a975bede490244df79d209a58ded7a1c95?placeholderIfAbsent=true",
      title: "Silver Bracelet",
      artisan: "Mention Artisan name",
    },
    // Duplicate items to create seamless loop
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f130a4a975bede490244df79d209a58ded7a1c95?placeholderIfAbsent=true",
      title: "Silver Earrings",
      artisan: "Mention Artisan name",
    },
    {
      id: 6,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7254d8a17f555b0617febac724b6101528ba7dc8?placeholderIfAbsent=true",
      title: "Silver Necklace",
      artisan: "Mention Artisan name",
    },
    {
      id: 7,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3227f2a1432ceb9bc223338c13d224b68f4f236d?placeholderIfAbsent=true",
      title: "Silver Idol",
      artisan: "Mention Artisan name",
    },
    {
      id: 8,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f130a4a975bede490244df79d209a58ded7a1c95?placeholderIfAbsent=true",
      title: "Silver Bracelet",
      artisan: "Mention Artisan name",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 1; // Adjust speed as needed

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId;
    let lastTimestamp = 0;

    const scroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused) {
        setScrollPosition((prev) => {
          const newPosition = prev + (scrollSpeed * delta) / 16;
          
          // Reset position when scrolled all items
          if (newPosition >= slider.scrollWidth / 2) {
            return 0;
          }
          return newPosition;
        });
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section
      className="flex flex-col items-center justify-center w-full px-8 py-16 bg-white max-md:px-4 max-md:py-10 overflow-hidden"
      aria-labelledby="products-heading"
    >
      <h2
        id="products-heading"
        className="text-4xl font-bold text-center text-black mb-14 max-md:text-3xl"
      >
        Featured Products
      </h2>

      <div
        className="relative w-full overflow-x-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={sliderRef}
          className="flex gap-10 w-max"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isPaused ? 'transform 0.3s ease' : 'none',
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-[300px] flex-shrink-0">
              <ProductCard
                image={product.image}
                title={product.title}
                artisan={product.artisan}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;