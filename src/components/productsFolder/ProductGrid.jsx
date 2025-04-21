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

  return (
    <main className="bg-gray-50 py-12">
      {/* Artisan A Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-6 items-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-100 shadow-sm">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fbe49fedb3f3ad1ef298c86acfa3a9e3af21ba?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt="Artisan A"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Artisan A</h2>
            <p className="text-gray-600 mt-1">Silver Ornaments Specialist</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisanAProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>

      {/* Artisan B Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-6 items-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-100 shadow-sm">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fbe49fedb3f3ad1ef298c86acfa3a9e3af21ba?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt="Artisan B"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Artisan B</h2>
            <p className="text-gray-600 mt-1">Gold Ornaments Specialist</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisanBProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbca83ce66d9c0e6b18c0f47e2f13153ce4aaa55?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Promotional Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </main>
  );
}

export default ProductGrid;