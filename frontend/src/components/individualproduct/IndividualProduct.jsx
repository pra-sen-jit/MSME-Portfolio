"use client";
import * as React from "react";
import { useState } from "react";

function IndividualProduct() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetails />
        <RelatedProducts />
      </main>
    </div>
  );
}

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0a7b2bae1adcbfd602cc9713770045531d377541?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/50da161a0f4c7e123a4ae19642dd2dd3e92ed6e7?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/50da161a0f4c7e123a4ae19642dd2dd3e92ed6e7?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/50da161a0f4c7e123a4ae19642dd2dd3e92ed6e7?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
  ];

  return (
    <section className="lg:grid lg:grid-cols-2 lg:gap-16">
      {/* Product Gallery */}
      <div className="flex flex-col gap-6">
        <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
          <img
            src={images[selectedImage]}
            alt={`Product view ${selectedImage + 1}`}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square overflow-hidden rounded-xl transition-all duration-300 ${
                selectedImage === index
                  ? "ring-2 ring-emerald-500"
                  : "hover:ring-1 ring-gray-200"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-8 lg:mt-0">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Handcrafted Silver Earrings
        </h1>
        <div className="mt-4 flex items-center gap-2">
          <p className="text-3xl font-semibold text-emerald-600">₹1500</p>
          <span className="text-sm text-gray-500 line-through">₹1999</span>
          <span className="ml-2 rounded-full bg-emerald-100 px-2 py-1 text-sm font-medium text-emerald-800">
            25% off
          </span>
        </div>

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors sm:w-auto ${
            isWishlisted
              ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>

        <ProductSpecifications />
        <ArtisanInfo />
      </div>
    </section>
  );
}

function ProductSpecifications() {
  const specs = [
    { label: "Material", value: "925 Sterling Silver" },
    { label: "Weight", value: "2.5g per piece" },
    { label: "Dimensions", value: "5cm x 12cm" },
    { label: "Certification", value: "Hallmarked" },
    { label: "Finish", value: "Polished" },
    { label: "Closure Type", value: "Leverback" },
  ];

  return (
    <div className="mt-8 border-t border-gray-200 pt-8">
      <h2 className="text-xl font-semibold text-gray-900">
        Product Specifications
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {specs.map((spec, index) => (
          <div key={index} className="rounded-lg bg-gray-50 p-4 shadow-sm">
            <dt className="text-sm font-medium text-gray-500">{spec.label}</dt>
            <dd className="mt-1 text-gray-900">{spec.value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtisanInfo() {
  return (
    <div className="mt-8 border-t border-gray-200 pt-8">
      <h2 className="text-xl font-semibold text-gray-900">About the Artisan</h2>
      <div className="mt-6 flex items-start gap-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae8d3cc3c7afe91e8e172be20b9270c8809fef1?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Artisan A"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">Artisan Aravind</h3>
          <p className="text-sm font-medium text-gray-500">
            Master Silversmith | 15+ Years Experience
          </p>
          <p className="mt-2 text-gray-600">
            Carrying forward a 200-year-old tradition of Magrahat filigree work.
            Each piece is handcrafted using ancient techniques passed down
            through generations, combining intricate silver wirework with
            contemporary designs.
          </p>
          <button className="mt-4 flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
            <span>Contact Artisan</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function RelatedProducts() {
  const products = [
    {
      name: "Vintage Hoop Earrings",
      price: "₹1400",
      image: "https://dummyimage.com/300x300/e5e7eb/64748b&text=Product+1",
    },
    {
      name: "Silver Moon Drops",
      price: "₹1200",
      image: "https://dummyimage.com/300x300/e5e7eb/64748b&text=Product+2",
    },
    {
      name: "Filigree Studs",
      price: "₹1600",
      image: "https://dummyimage.com/300x300/e5e7eb/64748b&text=Product+3",
    },
    {
      name: "Geometric Designs",
      price: "₹1500",
      image: "https://dummyimage.com/300x300/e5e7eb/64748b&text=Product+4",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <p className="mt-2 text-lg font-semibold text-emerald-600">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndividualProduct;
