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
<<<<<<< HEAD
    <section className="w-full" aria-labelledby="products-heading">
      <h2
        id="products-heading"
        className="self-center mt-11 text-4xl text-black max-md:mt-10 text-center"
=======
    <section className="w-full px-4 py-12" aria-labelledby="products-heading">
      <h2
        id="products-heading"
        className="text-4xl font-semibold text-center text-black mb-12"
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
      >
        Featured Products
      </h2>

<<<<<<< HEAD
      <div className="self-center mt-16 w-full max-w-[1357px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`${index > 0 ? "ml-5 " : ""}w-[33%] max-md:ml-0 max-md:w-full`}
            >
=======
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-full sm:w-[48%] md:w-[30%]">
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
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
