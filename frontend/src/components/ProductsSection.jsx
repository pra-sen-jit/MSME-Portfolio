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
  ];

  return (
    <section className="w-full px-4 py-12" aria-labelledby="products-heading">
      <h2
        id="products-heading"
        className="text-4xl font-semibold text-center text-black mb-12"
      >
        Featured Products
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-full sm:w-[48%] md:w-[30%]">
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
