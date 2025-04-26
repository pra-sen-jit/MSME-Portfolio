import React from "react";
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
  ];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl w-full">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            artisan={product.artisan}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
