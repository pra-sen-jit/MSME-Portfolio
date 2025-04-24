import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const artisanAProducts = [
    {
      id: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Earrings",
      price: "₹1200",
    },
    {
      id: 2,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7d308ef00daeadfac1d1504148acb4c9527335a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Necklace",
      price: "₹1200",
    },
    {
      id: 3,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a49c3fe49cd483ac197b3432affb4471fbd71a9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Bangles",
      price: "₹1200",
    },
  ];

  const artisanBProducts = [
    {
      id: 4,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Golden Earrings",
      price: "₹1500",
    },
    {
      id: 5,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7d308ef00daeadfac1d1504148acb4c9527335a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Golden Necklace",
      price: "₹1800",
    },
    {
      id: 6,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a49c3fe49cd483ac197b3432affb4471fbd71a9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Golden Bangles",
      price: "₹1400",
    },
  ];

  const artisanCProducts = [
    {
      id: 7,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Mixed Metal Anklet",
      price: "₹900",
    },
    {
      id: 8,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7d308ef00daeadfac1d1504148acb4c9527335a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Beaded Necklace",
      price: "₹1100",
    },
    {
      id: 9,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a49c3fe49cd483ac197b3432affb4471fbd71a9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Handmade Bracelet",
      price: "₹1000",
    },
  ];

  const renderArtisanSection = (name, role, products, borderColor = "indigo") => (
    <section className="max-w-7xl mx-auto px-6 mb-16">
      <div className="flex flex-wrap items-center gap-6 mb-8">
        <div className={`w-16 h-16 rounded-full overflow-hidden border-2 border-${borderColor}-100 shadow-sm`}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fbe49fedb3f3ad1ef298c86acfa3a9e3af21ba?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-1">{role}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );

  return (
    <main className="bg-gray-50 py-12">
      {renderArtisanSection("Artisan A", "Silver Ornaments Specialist", artisanAProducts, "indigo")}
      {renderArtisanSection("Artisan B", "Gold Ornaments Specialist", artisanBProducts, "amber")}
      {renderArtisanSection("Artisan C", "Handmade & Mixed Metals", artisanCProducts, "rose")}
    </main>
  );
}

export default ProductGrid;
