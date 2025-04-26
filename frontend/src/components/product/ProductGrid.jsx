import React, { useState } from "react";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const [activeArtisan, setActiveArtisan] = useState(null);

  const artisanAProducts = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Earrings",
      price: "₹1200",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c7d308ef00daeadfac1d1504148acb4c9527335a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Necklace",
      price: "₹1200",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a49c3fe49cd483ac197b3432affb4471fbd71a9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Bangles",
      price: "₹1200",
    },
  ];

  const artisanBProducts = [
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Golden Earrings",
      price: "₹1500",
    },
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c7d308ef00daeadfac1d1504148acb4c9527335a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Golden Necklace",
      price: "₹1800",
    },
    {
      id: 6,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a49c3fe49cd483ac197b3432affb4471fbd71a9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Golden Bangles",
      price: "₹1400",
    },
  ];

  const artisanCProducts = [
    {
      id: 7,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Mixed Metal Anklet",
      price: "₹900",
    },
    {
      id: 8,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c7d308ef00daeadfac1d1504148acb4c9527335a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Beaded Necklace",
      price: "₹1100",
    },
    {
      id: 9,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a49c3fe49cd483ac197b3432affb4471fbd71a9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Handmade Bracelet",
      price: "₹1000",
    },
  ];

  const artisansInfo = [
    {
      id: "artisanA",
      name: "Artisan A",
      role: "Silver Ornaments Specialist",
      products: artisanAProducts,
      color: "indigo",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      hoverBorderColor: "hover:border-indigo-400",
      textColor: "text-indigo-800",
    },
    {
      id: "artisanB",
      name: "Artisan B",
      role: "Gold Ornaments Specialist",
      products: artisanBProducts,
      color: "amber",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      hoverBorderColor: "hover:border-amber-400",
      textColor: "text-amber-800",
    },
    {
      id: "artisanC",
      name: "Artisan C",
      role: "Handmade & Mixed Metals",
      products: artisanCProducts,
      color: "rose",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      hoverBorderColor: "hover:border-rose-400",
      textColor: "text-rose-800",
    },
  ];

  const handleArtisanHover = (artisanId) => {
    setActiveArtisan(artisanId);
  };

  const renderArtisanSection = (artisan) => (
    <section
      key={artisan.id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 mb-16 pb-8 rounded-2xl ${
        activeArtisan === artisan.id ? artisan.bgColor : "bg-white"
      } transition-colors duration-300`}
      onMouseEnter={() => handleArtisanHover(artisan.id)}
      onMouseLeave={() => setActiveArtisan(null)}
    >
      <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6 my-8 pt-8">
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden 
          border-2 ${artisan.borderColor} ${artisan.hoverBorderColor} shadow-sm
          transition-all duration-300 transform 
          ${activeArtisan === artisan.id ? "scale-110" : ""}
        `}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fbe49fedb3f3ad1ef298c86acfa3a9e3af21ba?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt={artisan.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2
            className={`text-2xl sm:text-3xl font-bold ${artisan.textColor} transition-colors duration-300`}
          >
            {artisan.name}
          </h2>
          <p className="text-gray-600 mt-1 font-medium">{artisan.role}</p>
          <div
            className={`h-1 w-0 mt-2 ${`bg-${artisan.color}-500`} rounded transition-all duration-500 
            ${activeArtisan === artisan.id ? "w-16 sm:w-24" : ""}`}
          ></div>
        </div>
        <div className="ml-auto hidden sm:block">
          <button
            className={`px-4 py-2 rounded-md font-medium text-sm border 
              transition-all duration-300
              ${`border-${artisan.color}-500 text-${artisan.color}-600 hover:bg-${artisan.color}-500 hover:text-white`}`}
          >
            View All Products
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {artisan.products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <button
          className={`px-4 py-2 rounded-md font-medium text-sm border w-full
            transition-all duration-300
            ${`border-${artisan.color}-500 text-${artisan.color}-600 hover:bg-${artisan.color}-500 hover:text-white`}`}
        >
          View All Products
        </button>
      </div>
    </section>
  );

  return (
    <main className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
          Our Artisan Collections
        </h1>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Discover unique handcrafted pieces from our master artisans, each with
          their own specialty and style.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-12">
        {artisansInfo.map(renderArtisanSection)}
      </div>
    </main>
  );
}

export default ProductGrid;
