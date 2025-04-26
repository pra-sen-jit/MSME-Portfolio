"use client";
import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import EmployeeTable from "./EmployeeTable";
import ProductForm from "./ProductForm";
import Footer from "./Footer";

function EmployeeDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* <Header /> */}
      {/* <Navigation /> */}

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center mt-4 mb-6 text-2xl md:text-3xl text-black font-normal">
          Employee / Artisan Dash-Board
        </h1>

        <EmployeeTable />

        <div className="mt-8 w-full">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="flex flex-col text-black">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Add Products
                </h2>
                <p className="text-sm md:text-base">Max Limit: 3</p>
              </div>
            </div>
          </div>
        </div>

        <ProductForm productNumber={1} hasImage={true} />
        <hr className="my-8 h-px border-t border-black w-full" />

        <ProductForm productNumber={2} hasImage={false} />
        <hr className="my-8 h-px border-t border-black w-full" />

        <ProductForm productNumber={3} hasImage={false} />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default EmployeeDashboard;
