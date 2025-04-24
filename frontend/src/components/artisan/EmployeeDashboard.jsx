"use client";
import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import EmployeeTable from "./EmployeeTable";
import ProductForm from "./ProductForm";
import Footer from "./Footer";

function EmployeeDashboard() {
  return (
    <div className="overflow-hidden pt-3 bg-white">
      <div className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
        <Header />
        <Navigation />
        <h1 className="self-center mt-1.5 text-3xl text-black max-md:max-w-full">
          Employee / Artisan Dash-Board
        </h1>
      </div>
      <div className="flex flex-col items-start px-11 w-full max-md:px-5 max-md:max-w-full">
        <EmployeeTable />

        <div className="mt-5 w-full max-w-[1305px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start font-light text-black max-md:mt-8 max-md:max-w-full">
                <h2 className="text-3xl font-bold">Add Products</h2>
                <p className="z-10 text-xl">Max Limit: 3</p>
              </div>
            </div>
          </div>
        </div>

        <ProductForm productNumber={1} hasImage={true} />
        <hr className="shrink-0 mt-14 max-w-full h-px border border-black border-solid w-[1300px] max-md:mt-10" />

        <ProductForm productNumber={2} hasImage={false} />
        <hr className="shrink-0 mt-11 max-w-full h-px border border-black border-solid w-[1300px] max-md:mt-10" />

        <ProductForm productNumber={3} hasImage={false} />
      </div>

      <Footer />
    </div>
  );
}

export default EmployeeDashboard;
