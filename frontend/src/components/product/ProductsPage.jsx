"use client";
import React from "react";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";

function ProductsPage() {
  return (
    <div className="overflow-hidden pt-2.5 bg-white">
      <div className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
        <Header />
        <NavigationMenu />
        <div className="mt-11 w-full max-w-[1316px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[21%] max-md:ml-0 max-md:w-full">
              <Sidebar />
            </div>
            <div className="ml-5 w-[79%] max-md:ml-0 max-md:w-full">
              <ProductGrid />
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8128eab8777d68ab64a7b82cf614e136da9f104d?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Promotional banner"
          className="object-contain self-end mt-5 mr-12 w-full aspect-[2.31] max-w-[994px] max-md:mr-2.5 max-md:max-w-full"
        />
      </div>
    </div>
  );
}

export default ProductsPage;
