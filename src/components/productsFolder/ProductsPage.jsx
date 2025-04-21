"use client";
import React from "react";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";

function ProductsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Wrapper */}
      <div className="flex flex-col px-6 lg:px-8 w-full max-w-screen-2xl mx-auto">
        {/* Header and Navigation */}
        <Header />
        <NavigationMenu />

        {/* Main Content */}
        <div className="mt-12 w-full max-w-[1316px] mx-auto">
          {/* Layout: Sidebar and Product Grid */}
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="hidden md:block w-[25%]">
              <Sidebar />
            </div>

            {/* Product Grid */}
            <div className="w-full md:w-[75%]">
              <ProductGrid />
            </div>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="mt-16 max-w-7xl mx-auto px-6 w-full">
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8128eab8777d68ab64a7b82cf614e136da9f104d?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt="Promotional banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;