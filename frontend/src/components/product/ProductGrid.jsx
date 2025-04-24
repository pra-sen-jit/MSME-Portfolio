import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const products = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3af4fc347bb8e7d0bafcc9c2f73c93108b8d33e6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade",
      title: "Elegant Silver Earings",
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

  return (
    <main className="grow px-px pb-16 w-full bg-black bg-opacity-0 max-md:mt-10 max-md:max-w-full">
      <section
        className="pt-7 pb-2 bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full"
        aria-labelledby="artisan-heading"
      >
        <div className="w-full bg-black bg-opacity-0 max-md:max-w-full">
          {/* Artisan Information */}
          <div className="flex flex-wrap gap-4 pr-20 w-full bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
            <div className="flex justify-center items-center min-h-12">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fbe49fedb3f3ad1ef298c86acfa3a9e3af21ba?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Artisan profile"
                className="object-contain self-stretch my-auto w-12 rounded-full aspect-square"
              />
            </div>
            <div className="flex flex-col pt-0.5 pb-2 text-base leading-none bg-black bg-opacity-0">
              <h2 id="artisan-heading" className="self-start text-black">
                Artisan A
              </h2>
              <p className="mt-3 text-neutral-600">
                Silver Ornaments Specialist
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="pb-3 mt-4 bg-black bg-opacity-0 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-[33%] max-md:ml-0 max-md:w-full"
                >
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="pt-20 mt-2 max-w-full bg-black bg-opacity-0 w-[960px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbca83ce66d9c0e6b18c0f47e2f13153ce4aaa55?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Promotional banner"
          className="object-contain w-full aspect-[2.7] max-md:max-w-full"
        />
      </section>
    </main>
  );
}

export default ProductGrid;
