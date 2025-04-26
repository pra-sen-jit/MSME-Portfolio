"use client";
import * as React from "react";

function IndividualProduct() {
  return (
    <div className="overflow-hidden pt-2.5 bg-white">
      <Header />
      <main className="flex flex-col items-start px-8 w-full max-md:px-5 max-md:max-w-full">
        <Navigation />
        <ProductDetails />
        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1331px] px-8 max-md:px-5 max-md:max-w-full">
      <SearchBar />
      <h1 className="self-stretch text-5xl text-black max-md:text-4xl">
        MAGRAHAT
      </h1>
      <div className="flex gap-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/922b80cdb9e3dc6f91a6cfddc0f16b1eae74ff38?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Social media icon"
          className="object-contain shrink-0 aspect-square w-[42px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c06e53a3188190e19736d3d5e3a336a6081799?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Social media icon"
          className="object-contain shrink-0 aspect-square w-[42px]"
        />
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div
      className="flex gap-2.5 px-3 py-1 text-base text-black rounded-2xl bg-zinc-300 bg-opacity-50"
      role="search"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce6471c47d61b09a3bc49d5338dc5e6faf82e0c?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
        alt="Search icon"
        className="object-contain shrink-0 aspect-square w-[35px]"
      />
      <span className="my-auto basis-auto">What are you looking for?</span>
    </div>
  );
}

function Navigation() {
  return (
    <nav
      className="flex flex-col self-stretch px-3.5 pt-1 pb-8 mt-4 text-xl text-white bg-black rounded-lg border border-white border-solid max-md:pr-5 max-md:max-w-full"
      aria-label="Main navigation"
    >
      <div className="shrink-0 h-px border border-black border-solid max-md:max-w-full" />
      <div className="self-start mt-2 max-md:ml-0.5">
        HOME
        <br />
      </div>
      <div className="z-10 self-start mt-0 ml-64 max-md:ml-2.5">
        ABOUT <br />
      </div>
      <div className="z-10 self-center mt-0 text-2xl font-bold">PRODUCT</div>
      <div className="z-10 self-end mt-0 mr-80 max-md:mr-2.5">ARTISAN</div>
      <div className="z-10 self-end mt-0 max-md:mr-2">CONTACT US</div>
    </nav>
  );
}

function ProductDetails() {
  return (
    <section
      className="mt-24 ml-3.5 w-full max-w-[1276px] max-md:mt-10 max-md:max-w-full"
      aria-label="Product details"
    >
      <div className="flex gap-5 max-md:flex-col">
        <ProductGallery />
        <ProductInfo />
      </div>
    </section>
  );
}

function ProductGallery() {
  return (
    <div className="w-6/12 max-md:ml-0 max-md:w-full">
      <div className="w-full max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a7b2bae1adcbfd602cc9713770045531d377541?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Handcrafted Silver Earings - Main view"
          className="object-contain w-full rounded-2xl aspect-square max-md:max-w-full"
        />
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-3/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50da161a0f4c7e123a4ae19642dd2dd3e92ed6e7?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Silver earring thumbnail 1"
                className="object-contain shrink-0 max-w-full aspect-square rounded-[85px] w-[140px] max-md:mt-4"
              />
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50da161a0f4c7e123a4ae19642dd2dd3e92ed6e7?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Silver earring thumbnail 2"
                className="object-contain shrink-0 max-w-full rounded-xl aspect-square w-[140px] max-md:mt-4"
              />
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50da161a0f4c7e123a4ae19642dd2dd3e92ed6e7?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Silver earring thumbnail 3"
                className="object-contain shrink-0 max-w-full rounded-xl aspect-square w-[140px] max-md:mt-4"
              />
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50da161a0f4c7e123a4ae19642dd2dd3e92ed6e7?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Silver earring thumbnail 4"
                className="object-contain shrink-0 max-w-full rounded-xl aspect-square w-[140px] max-md:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfo() {
  return (
    <article className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
        <h2 className="self-start text-3xl font-bold leading-none text-black">
          Handcrafted Silver Earings
        </h2>
        <p className="self-start mt-5 text-2xl leading-none text-neutral-600">
          ₹1500
        </p>
        <button
          className="px-16 pt-3 pb-5 mt-11 text-base text-center text-black rounded-lg border border-black border-solid bg-zinc-800 bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full"
          aria-label="Add to Wishlist"
        >
          Add to Wishlist
        </button>

        <ProductSpecifications />
        <ArtisanInfo />
      </div>
    </article>
  );
}

function ProductSpecifications() {
  return (
    <section
      className="flex flex-col pt-7 mt-20 leading-none bg-black bg-opacity-0 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="product-specs-heading"
    >
      <h3
        id="product-specs-heading"
        className="self-start text-xl font-bold text-black"
      >
        Product Specifications
      </h3>
      <div className="mt-6 w-full text-base bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-wrap gap-4 max-md:max-w-full">
          <div className="flex flex-col flex-1 grow shrink-0 items-start pt-0.5 pr-14 pb-2.5 whitespace-nowrap basis-0 bg-black bg-opacity-0 w-fit">
            <h4 className="text-black">Material</h4>
            <p className="mt-3 text-neutral-600">Silver</p>
          </div>
          <div className="flex flex-col flex-1 grow shrink-0 items-start pt-0.5 pr-14 pb-2.5 basis-0 bg-black bg-opacity-0 w-fit">
            <h4 className="text-black">Height</h4>
            <p className="mt-2.5 text-neutral-600">12 cm</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 max-md:max-w-full">
          <div className="flex flex-col flex-1 grow shrink-0 items-start pt-0.5 pr-14 pb-2.5 basis-0 bg-black bg-opacity-0 w-fit">
            <h4 className="text-black">Width</h4>
            <p className="mt-3 text-neutral-600">5 cm</p>
          </div>
          <div className="flex flex-col flex-1 grow shrink-0 items-start py-1.5 pr-14 basis-0 bg-black bg-opacity-0 w-fit">
            <h4 className="text-black">Weight</h4>
            <p className="mt-2.5 text-neutral-600">2.5 gm - each</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArtisanInfo() {
  return (
    <section
      className="flex flex-col pt-7 mt-6 w-full bg-black bg-opacity-0 max-md:max-w-full"
      aria-labelledby="artisan-heading"
    >
      <h3
        id="artisan-heading"
        className="self-start text-xl font-bold leading-none text-black"
      >
        About the Artisan
      </h3>
      <div className="flex flex-wrap gap-4 pr-20 mt-7 w-full bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        <div className="flex justify-center items-center min-h-16">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/170894ed2d58309480b551d3d220b65b518ed659?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Artisan A profile picture"
            className="object-contain self-stretch my-auto w-16 rounded-full aspect-square"
          />
        </div>
        <div className="flex flex-col px-px py-1.5 my-auto text-base leading-none bg-black bg-opacity-0">
          <h4 className="self-start text-black">Artisan A</h4>
          <p className="mt-3 text-neutral-600">Silver Ornaments Specialist</p>
        </div>
      </div>
      <p className="mt-7 mr-12 text-base leading-4 text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
        Artisan A has been crafting silver ornaments for over 15 years,
        specializing in traditional techniques with modern designs. Each piece
        is uniquely handcrafted in his workshop at Magrahat.
      </p>
      <button
        className="flex gap-2 px-px py-1 mt-8 max-w-full bg-black bg-opacity-0 w-[139px]"
        aria-label="Contact Artisan"
      >
        <span className="grow text-base leading-none text-center text-black">
          Contact Artisan
        </span>
        <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae8d3cc3c7afe91e8e172be20b9270c8809fef1?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Arrow icon"
            className="object-contain self-stretch my-auto w-3.5 aspect-[0.87]"
          />
        </div>
      </button>
    </section>
  );
}

function RelatedProducts() {
  return (
    <section
      className="mt-20 w-full max-w-[1278px] max-md:mt-10 max-md:max-w-full"
      aria-labelledby="related-products-heading"
    >
      <h2
        id="related-products-heading"
        className="text-2xl leading-none text-black mb-11 max-md:mb-9"
      >
        Related Products
      </h2>
      <div className="flex gap-5 max-md:flex-col">
        <RelatedProductItem
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7d0333e174cdd991a1884b82a029cb6df9a5eac6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          title="Aesthetic Earings 1"
          price="₹1400"
          index={1}
        />
        <RelatedProductItem
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/547bd41c65be103ba41e1c98b46c6824ef2761c3?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          title="Aesthetic Earings 2"
          price="₹1200"
          index={2}
          className="mt-16 max-md:mt-10"
        />
        <RelatedProductItem
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c54b5ebc8b9c7d94f0335ecc27419261e19c94d3?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          title="Aesthetic Earings 3"
          price="₹1600"
          index={3}
          className="mt-16 max-md:mt-10"
        />
        <RelatedProductItem
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c192eee8c0a0830d0278504366cb0bc099739f26?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          title="Aesthetic Earings 4"
          price="₹1500"
          index={4}
          className="mt-16 max-md:mt-10"
        />
      </div>
    </section>
  );
}

function RelatedProductItem({ imageSrc, title, price, index, className = "" }) {
  return (
    <article
      className={`${index > 1 ? "ml-5" : ""} w-3/12 max-md:ml-0 max-md:w-full ${className}`}
    >
      <div className="flex flex-col grow items-start text-xl">
        <img
          src={imageSrc}
          alt={title}
          className="object-contain self-stretch w-full rounded-xl aspect-[0.97]"
        />
        <h3 className="mt-8 leading-tight text-black">{title}</h3>
        <p className="mt-5 leading-none text-neutral-600">{price}</p>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer
      className="flex overflow-hidden flex-col justify-center px-20 py-10 mt-20 w-full bg-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      aria-label="Site footer"
    >
      <div className="px-4 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start pt-0.5 pr-9 pb-12 w-full bg-black bg-opacity-0 max-md:mt-8">
                <h2 className="text-xl leading-none text-white">
                  Magrahat Filigree
                </h2>
                <p className="mt-7 text-base leading-4 text-neutral-400">
                  Preserving the art of silver filigree craftsmanship
                </p>
              </div>
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-px w-full text-base leading-none bg-black bg-opacity-0 max-md:mt-8">
                <h3 className="self-start text-white">Quick Links</h3>
                <nav
                  className="mt-6 whitespace-nowrap bg-black bg-opacity-0 text-neutral-400"
                  aria-label="Quick links"
                >
                  <ul>
                    <li className="pt-0.5 pb-2.5 bg-black bg-opacity-0 max-md:pr-5">
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Products
                      </a>
                    </li>
                    <li className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Artisans
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-px w-full text-base bg-black bg-opacity-0 max-md:mt-8">
                <h3 className="self-start leading-none text-white">Contact</h3>
                <address className="mt-7 bg-black bg-opacity-0 text-neutral-400 not-italic">
                  <p className="py-1 bg-black bg-opacity-0 max-md:pr-5">
                    Email:{" "}
                    <a
                      href="mailto:info@magrahatfiligree.com"
                      className="hover:text-white transition-colors"
                    >
                      info@magrahatfiligree.com
                    </a>
                  </p>
                  <p className="pt-0.5 pb-2.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Phone:{" "}
                    <a
                      href="tel:+911234567890"
                      className="hover:text-white transition-colors"
                    >
                      +91 1234567890
                    </a>
                  </p>
                  <p className="py-1.5 mt-2 bg-black bg-opacity-0 max-md:pr-5">
                    Address: Magrahat, West Bengal
                  </p>
                </address>
              </div>
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-0.5 pb-16 w-full text-base leading-none text-white bg-black bg-opacity-0 max-md:mt-8">
                <h3 className="self-start">Follow Us</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd190fe0f98cb6390668774f04898daa57659405?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                  alt="Social media icons"
                  className="object-contain mt-7 w-72 aspect-[12.05]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 pt-9 pb-2 mt-12 text-base leading-none text-center bg-black bg-opacity-0 text-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          © 2025 Magrahat Silver Filigree. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default IndividualProduct;
