"use client";
import React, { useState } from "react";
import AnimatedPage from "../AnimatedPage";
import axios from "axios";
import { Edit2, Save, UploadCloud } from "lucide-react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const productUrl = `${backendUrl}/products`;

function AdditionalImages({ productNumber }) {
  const [extraImages, setExtraImages] = useState([null, null, null, null]);

  const handleExtraImageChange = (index, event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const newImages = [...extraImages];
      newImages[index] = file;
      setExtraImages(newImages);
      console.log(`Product #${productNumber}, Extra image #${index + 1}`, file);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="text-sm font-normal leading-tight text-black mb-2">
        Add more pictures
      </h3>
      <div className="flex flex-wrap gap-2">
        {[0, 1, 2, 3].map((index) => (
          <label
            key={index}
            className="flex flex-col items-center justify-center w-10 h-10 bg-zinc-300
                       transition-all duration-200 hover:bg-zinc-400 active:bg-zinc-500
                       hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400
                       cursor-pointer"
            aria-label={`Add additional image ${index + 1} for product ${productNumber}`}
          >
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleExtraImageChange(index, e)}
            />
            {extraImages[index] ? (
              <img
                src={URL.createObjectURL(extraImages[index])}
                alt={`Extra ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-200 hover:scale-110"
              >
                <path d="M8 0V16" stroke="#888888" strokeWidth="2" />
                <path d="M0 8H16" stroke="#888888" strokeWidth="2" />
              </svg>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}

function ProductSpecifications({ productNumber }) {
  return (
    <div className="w-full mb-4">
      <h3 className="text-sm font-normal text-black mb-3">Product Specifications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label
            htmlFor={`material-${productNumber}`}
            className="block text-sm mb-1"
          >
            Material
          </label>
          <input
            id={`material-${productNumber}`}
            type="text"
            className="w-full h-10 px-3 rounded border border-black shadow-sm
                       transition-shadow duration-200 focus:shadow-md focus:outline-none
                       focus:ring-1 focus:ring-gray-400"
            aria-required="true"
          />
        </div>
        <div>
          <label
            htmlFor={`height-${productNumber}`}
            className="block text-sm mb-1"
          >
            Height
          </label>
          <input
            id={`height-${productNumber}`}
            type="text"
            className="w-full h-10 px-3 rounded border border-black shadow-sm
                       transition-shadow duration-200 focus:shadow-md focus:outline-none
                       focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor={`width-${productNumber}`}
            className="block text-sm mb-1"
          >
            Width
          </label>
          <input
            id={`width-${productNumber}`}
            type="text"
            className="w-full h-10 px-3 rounded border border-black shadow-sm
                       transition-shadow duration-200 focus:shadow-md focus:outline-none
                       focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor={`weight-${productNumber}`}
            className="block text-sm mb-1"
          >
            Weight
          </label>
          <input
            id={`weight-${productNumber}`}
            type="text"
            className="w-full h-10 px-3 rounded border border-black shadow-sm
                       transition-shadow duration-200 focus:shadow-md focus:outline-none
                       focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

function ProductForm({ productNumber }) {
  // main image
  const [mainImageFile, setMainImageFile] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleSaveProduct = async () => {
  const name = document.getElementById(`product-name-${productNumber}`).value;
  const price = document.getElementById(`product-price-${productNumber}`).value;
  const description = document.getElementById(`product-description-${productNumber}`).value;

  const material = document.getElementById(`material-${productNumber}`).value;
  const height = document.getElementById(`height-${productNumber}`).value;
  const width = document.getElementById(`width-${productNumber}`).value;
  const weight = document.getElementById(`weight-${productNumber}`).value;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("description", description);
  formData.append("specifications[material]", material);
  formData.append("specifications[height]", height);
  formData.append("specifications[width]", width);
  formData.append("specifications[weight]", weight);

  if (mainImageFile) {
    formData.append("mainImage", mainImageFile);
  }

  // Append extra images with unique keys
  extraImages.forEach((img, idx) => {
    if (img) formData.append(`extraImages[${idx}]`, img);
  });

  try {
    const response = await axios.post(productUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
         Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    });
    alert("Product saved successfully!");
    console.log("Saved:", response.data);
  } catch (error) {
    console.error("Error saving product:", error);
    alert("Failed to save product.");
  }
};
 const handleDeleteProduct = async () => {
  if (window.confirm("Are you sure you want to delete this product?")) {
    try {
      await axios.delete(`productUrl${productId}`);
      // Instead of hiding the box:
      setProductName("");
      setProductPrice("");
      setProductDescription("");
      setMainImageFile(null);
      setMainImagePreview(null);
      // Possibly show an alert:
      alert("Product deleted from DB. The UI is now blank.");
    } catch (error) {
      alert("Error deleting product: " + error.message);
    }
  }
};

  const handleMainImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMainImageFile(file);
      setMainImagePreview(URL.createObjectURL(file));
      console.log(`Product #${productNumber}, main image`, file);
    }
  };

  const handleProductDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log(`Product #${productNumber} (UI only) deleted.`);
      // If you want to call a backend DELETE, do it here
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <section
      className="w-full mb-8 relative"
      aria-labelledby={`product-${productNumber}-heading`}
    >
      <h2
        id={`product-${productNumber}-heading`}
        className="mt-6 mb-4 text-lg font-normal text-black"
      >
        Product No: {productNumber}
      </h2>

      <button
        type="button"
        aria-label="Delete this product"
        onClick={handleDeleteProduct}
        className="absolute right-4 top-4 text-red-600 hover:text-red-800 focus:outline-none"
      >
        {/* trash icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: main image & small images */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {/* main image */}
          <label
            htmlFor={`product-image-${productNumber}`}
            className="block w-full cursor-pointer"
          >
            <input
              type="file"
              id={`product-image-${productNumber}`}
              className="hidden"
              onChange={handleMainImageChange}
            />
            {/* default placeholder if no file */}
            {mainImagePreview ? (
              <img
                src={mainImagePreview}
                alt={`Product ${productNumber} preview`}
                className="w-full object-cover rounded bg-gray-100 aspect-square"
              />
            ) : (
              <div className="flex flex-col justify-center items-center p-6 w-full aspect-square bg-zinc-300 rounded">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-500"
                >
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            )}
          </label>

          {/* additional images below main */}
          <AdditionalImages productNumber={productNumber} />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          {/* Name / Price / Specs in one vertical flow */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-grow">
              <label
                htmlFor={`product-name-${productNumber}`}
                className="block text-sm mb-1"
              >
                Product Name
              </label>
              <input
                id={`product-name-${productNumber}`}
                type="text"
                className="w-full h-10 px-3 rounded border border-black shadow-sm"
                aria-required="true"
              />
            </div>

            <div className="w-full sm:w-32">
              <label
                htmlFor={`product-price-${productNumber}`}
                className="block text-sm mb-1"
              >
                Price
              </label>
              <div className="relative">
                <input
                  id={`product-price-${productNumber}`}
                  type="text"
                  className="w-full h-10 pl-6 pr-3 rounded border border-black shadow-sm"
                  aria-required="true"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base">
                  ₹
                </span>
              </div>
            </div>
          </div>

          <hr className="border-t border-black" />
          <ProductSpecifications productNumber={productNumber} />

          <hr className="border-t border-black" />
          {/* product description below all specs */}
          <div>
            <label
              htmlFor={`product-description-${productNumber}`}
              className="block text-sm mb-1"
            >
              Product Description
            </label>
            <textarea
              id={`product-description-${productNumber}`}
              rows={3}
              className="w-full p-2 rounded border border-black shadow-sm
                         transition-shadow duration-200 focus:shadow-md focus:outline-none
                         focus:ring-1 focus:ring-gray-400"
            ></textarea>
          </div>
        </div>
      </div>
      {/* Save Button */}
    <button
      type="button"
      onClick={handleSaveProduct}
      className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      <Save size={16} /> Save Product
    </button>
    </section>
  );
}

function EmployeeTable() {
  return (
    <section
      className="w-full mb-6 bg-white border border-solid border-neutral-200 rounded-lg"
      aria-labelledby="employee-table-heading"
    >
      <h2 id="employee-table-heading" className="sr-only">
        Employee Information
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-2 py-3 px-4 md:px-6 text-sm font-medium text-neutral-700 bg-neutral-50 border-b border-neutral-200 rounded-t-lg">
        <div className="col-span-3">Name</div>
        <div className="col-span-4">Specialization</div>
        <div className="col-span-4">Contact Details</div>
        <div className="col-span-1 text-center">Actions</div>
      </div>

      {/* Table Row */}
      <div className="grid grid-cols-12 gap-2 py-3 px-4 md:px-6 text-sm">
        <div className="col-span-3 flex items-center gap-3">
          <div className="flex justify-center items-center w-8 h-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e8d0f98f086f2e60ad1a5b4ed65ccbd54198e9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt="Artisan A profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
          <div className="font-normal text-neutral-800">Artisan A</div>
        </div>
        <div className="col-span-4 flex items-center font-normal text-neutral-600">
          Silver Ornaments expert
        </div>
        <div className="col-span-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-600"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <a
            href="mailto:maria@example.com"
            className="font-normal text-neutral-600 hover:text-blue-600 hover:underline 
                       transition-colors duration-200 active:text-blue-800"
          >
            maria@example.com
          </a>
        </div>
        <div className="col-span-1 flex justify-center items-center gap-3">
          <button
            aria-label="Edit artisan"
            className="p-1 rounded-full hover:bg-gray-100 transition-colors
                       duration-200 active:bg-gray-200 focus:outline-none
                       focus:ring-2 focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </button>
          <button
            aria-label="Delete artisan"
            className="p-1 rounded-full hover:bg-gray-100 transition-colors
                       duration-200 active:bg-gray-200 focus:outline-none
                       focus:ring-2 focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default function EmployeeDashboard() {
  const handleEditAll = () => {
    console.log("Editing all products as one...");
    alert("Edit mode enabled for all products.");
  };

  const handleSaveAll = async () => {
    try {
      for (let i = 1; i <= 3; i++) {
        const artisanId = localStorage.getItem("ArtisanId");
        const productName = document.getElementById(`product-name-${i}`)?.value;
        const productPrice = document.getElementById(`product-price-${i}`)?.value;
        const productDescription =
          document.getElementById(`product-description-${i}`)?.value || "";
        const material = document.getElementById(`material-${i}`)?.value || "";
        const height = document.getElementById(`height-${i}`)?.value || "";
        const width = document.getElementById(`width-${i}`)?.value || "";
        const weight = document.getElementById(`weight-${i}`)?.value || "";

        // Debug info
        console.log(
          `(DEBUG) For product #${i}: artisanId=`,
          artisanId,
          " productName=",
          productName
        );

        if (!artisanId || !productName) {
          throw new Error(`Product ${i}: artisanId and productName are required.`);
        }

        // main image
        const mainImageInput = document.getElementById(`product-image-${i}`);
        const mainImageFile =
          mainImageInput?.files && mainImageInput.files[0]
            ? mainImageInput.files[0]
            : null;

        const formData = new FormData();
        formData.append("artisanId", artisanId);
        formData.append("productName", productName);
        formData.append("productPrice", productPrice);
        formData.append("material", material);
        formData.append("height", height);
        formData.append("width", width);
        formData.append("weight", weight);
        formData.append("productDescription", productDescription);
        if (mainImageFile) {
          formData.append("image1", mainImageFile);
        }

        await axios.post(productUrl, formData, {
          headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
          }, 
          
        });
      }
      alert("All products saved successfully.");
    } catch (error) {
      console.error("Error saving products", error);
      alert("Error saving products: " + error.message);
    }
  };

  const handleListAll = async () => {
    try {
      await handleSaveAll();
      alert("Products have been listed for customers.");
    } catch (error) {
      console.error("Error listing products", error);
      alert("Error listing products: " + error.message);
    }
  };

  return (
    <AnimatedPage>
      <div className="flex flex-col min-h-screen bg-white">
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center mt-4 mb-6 text-2xl md:text-3xl text-black font-normal">
            Employee / Artisan Dash-Board
          </h1>

          <EmployeeTable />

          <div className="mt-8 w-full flex items-center justify-between text-black">
            <div className="flex flex-col">
              <h2 className="text-xl md:text-2xl font-semibold">Add Products</h2>
              <p className="text-sm md:text-base">Max Limit: 3</p>
            </div>

            <div className="flex gap-4">
              <button
                className="flex items-center gap-1 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors"
                onClick={handleEditAll}
              >
                <Edit2 size={16} /> <span>Edit</span>
              </button>
              <button
                className="flex items-center gap-1 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors"
                onClick={handleSaveAll}
              >
                <Save size={16} /> <span>Save</span>
              </button>
              <button
                className="flex items-center gap-1 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors"
                onClick={handleListAll}
              >
                <UploadCloud size={16} /> <span>List</span>
              </button>
            </div>
          </div>

          {/* 3 product boxes */}
          <ProductForm productNumber={1} />
          <hr className="my-8 h-px border-t border-black w-full" />

          <ProductForm productNumber={2} />
          <hr className="my-8 h-px border-t border-black w-full" />

          <ProductForm productNumber={3} />
        </main>
      </div>
    </AnimatedPage>
  );
}