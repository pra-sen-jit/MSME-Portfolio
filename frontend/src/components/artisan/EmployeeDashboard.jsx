"use client";
import React, { useState, useEffect } from "react";
import AnimatedPage from "../AnimatedPage";
import axios from "axios";
import { Edit2, Save, UploadCloud, Trash2, Plus } from "lucide-react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const productUrl = `${backendUrl}/products`;

function AdditionalImages({ productNumber, images, onImageChange, disabled }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-normal leading-tight text-black mb-2">
        Add more pictures
      </h3>
      <div className="flex flex-wrap gap-2">
        {[0, 1, 2, 3].map((index) => (
          <label
            key={index}
            className={`flex flex-col items-center justify-center w-10 h-10 bg-zinc-300
              transition-all duration-200 hover:bg-zinc-400 active:bg-zinc-500
              hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400
              ${disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"}`}
            aria-label={`Add additional image ${index + 1} for product ${productNumber}`}
          >
            <input
              type="file"
              className="hidden"
              onChange={(e) => onImageChange(index, e)}
              disabled={disabled}
            />
            {images[index]?.preview ? (
              <img
                src={images[index].preview}
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

function ProductSpecifications({ productNumber, specs, onChange, disabled }) {
  return (
    <div className="w-full mb-4">
      <h3 className="text-sm font-normal text-black mb-3">Product Specifications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {['material', 'height', 'width', 'weight','certification', 'finish'].map((field) => (
          <div key={field}>
            <label
              htmlFor={`${field}-${productNumber}`}
              className="block text-sm mb-1"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              id={`${field}-${productNumber}`}
              type="text"
              value={specs[field] || ''}
              onChange={(e) => onChange(field, e.target.value)}
              className={`w-full h-10 px-3 rounded border border-black shadow-sm
                transition-shadow duration-200 focus:shadow-md focus:outline-none
                focus:ring-1 focus:ring-gray-400 ${disabled ? 'bg-gray-100' : ''}`}
              disabled={disabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductForm({ productNumber, product, onDelete, maxProducts, isNewSlot, fetchProducts }) {
  const [isEditing, setIsEditing] = useState(isNewSlot);
  const [formData, setFormData] = useState({
    productName: product?.productName || '',
    productPrice: product?.productPrice || '',
    specs: {
      material: product?.material || '',
      height: product?.height || '',
      width: product?.width || '',
      weight: product?.weight || '',
      certification: product?.certification || '',
      finish: product?.finish || '',
    },
    description: product?.productDescription || '',
    mainImage: product?.image1 ? { preview: `${backendUrl}${product.image1}` } : null,
    extraImages: [2, 3, 4, 5].map(i => 
      product?.[`image${i}`] ? { preview: `${backendUrl}${product[`image${i}`]}` } : null
    )
  });

  useEffect(() => {
    if (product?.id) {
      setFormData({
          productName: product.productName,
          productPrice: product.productPrice,
          specs: {
            material: product.material,
            height: product.height,
            width: product.width,
            weight: product.weight,
            certification: product.certification || '', // Add this line
            finish: product.finish || '' // Add this line
          },
          description: product.productDescription,
          mainImage: product.image1 ? { 
            preview: `${backendUrl}${product.image1.startsWith('/') ? product.image1 : '/' + product.image1}`
          } : null,
          extraImages: [2, 3, 4, 5].map(i => 
            product[`image${i}`] ? { 
              preview: `${backendUrl}${product[`image${i}`].startsWith('/') ? '' : '/'}${product[`image${i}`]}`
            } : null
          )
        });
    } else {
      setFormData({
        productName: '',
        productPrice: '',
        specs: { material: '', height: '', width: '', weight: '' , certification: '', finish: '' },
        description: '',
        mainImage: null,
        extraImages: [null, null, null, null]
      });
    }
  }, [product, isNewSlot]);

  const handleSpecChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      specs: { ...prev.specs, [field]: value }
    }));
  };

  const handleMainImage = e => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        mainImage: { file, preview: URL.createObjectURL(file) }
      }));
    }
  };

  const handleExtraImage = (index, e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => {
        const newExtras = [...prev.extraImages];
        newExtras[index] = { file, preview: URL.createObjectURL(file) };
        return { ...prev, extraImages: newExtras };
      });
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const formPayload = new FormData();
      const isUpdate = !!product?.id && !isNaN(product.id);

      const method = isUpdate ? 'put' : 'post';
      const url = isUpdate ? `${productUrl}/${product.id}` : productUrl;

      formPayload.append('productName', formData.productName);
      formPayload.append('productPrice', formData.productPrice);
      formPayload.append('material', formData.specs.material);
      formPayload.append('height', formData.specs.height);
      formPayload.append('width', formData.specs.width);
      formPayload.append('weight', formData.specs.weight);
      formPayload.append('certification', formData.specs.certification);
      formPayload.append('finish', formData.specs.finish);
      formPayload.append('productDescription', formData.description);

      if (formData.mainImage?.file) {
        formPayload.append('image1', formData.mainImage.file);
      } else if (product?.image1) {
        formPayload.append('image1', product.image1.split('/uploads/')[1]);
      }
      if (isUpdate && !isNaN(product.id)) {
        formPayload.append('id', product.id);
      }

      formData.extraImages.forEach((img, index) => {
        const fieldName = `image${index + 2}`;
        if (img?.file) {
          formPayload.append(fieldName, img.file);
        } else if (product?.[fieldName]) {
          formPayload.append(fieldName, product[fieldName].split('/uploads/')[1]);
        }
      });

      const response = await axios[method](url, formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      setIsEditing(false);
      if (typeof fetchProducts === 'function') {
        fetchProducts();
      }
      alert(response.data.message || `Product ${isUpdate ? 'updated' : 'saved'} successfully!`);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          error.message;
      alert(`Save failed: ${errorMessage}`);
    }
  };

  const handleDelete = async () => {
    const confirmMsg = isNewSlot ? 'Discard this draft?' : 'Delete this product permanently?';
    if (window.confirm(confirmMsg)) {
      try {
        if (!isNewSlot) {
          const token = localStorage.getItem('token');
          await axios.delete(`${productUrl}/${product.id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
        }
        onDelete(isNewSlot ? product.id : String(product.id));
      } catch (error) {
        alert(`Delete failed: ${error.response?.data?.message || error.message}`);
      }
    }
  };

  const saveDisabled = isNewSlot && maxProducts >= 3;

  return (
    <section className="w-full mb-8 relative bg-gray-50 p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-normal text-black">
          Product No: {productNumber}
        </h2>
        <div className="flex gap-2">
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-1 bg-black text-white px-3 py-2 rounded hover:bg-gray-800"
              disabled={saveDisabled}
            >
              <Edit2 size={16} /> Edit
            </button>
          )}
          {isEditing && (
            <button
              onClick={handleSave}
              className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
            >
              <Save size={16} /> Save
            </button>
          )}
          {(product?.id || isEditing) && (
            <button
              onClick={product?.id ? handleDelete : () => setIsEditing(false)}
              className="flex items-center gap-1 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
            >
              <Trash2 size={16} /> {product?.id ? 'Delete' : 'Cancel'}
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <label
            htmlFor={`main-image-${productNumber}`}
            className={`block w-full ${isEditing ? 'cursor-pointer' : ''}`}
          >
            <input
              type="file"
              id={`main-image-${productNumber}`}
              className="hidden"
              onChange={handleMainImage}
              disabled={!isEditing}
            />
            {(formData.mainImage?.preview || product?.image1) ? (
              <img
                src={formData.mainImage?.preview || `${backendUrl}${product.image1}`}
                alt="Main preview"
                className="w-full aspect-square object-cover rounded bg-gray-100"
              />
            ) : (
              <div className="aspect-square bg-zinc-300 rounded flex items-center justify-center">
                <UploadCloud size={24} className="text-gray-500" />
              </div>
            )}
          </label>
          <AdditionalImages
            productNumber={productNumber}
            images={formData.extraImages}
            onImageChange={handleExtraImage}
            disabled={!isEditing}
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-grow">
              <input
                value={formData.productName}
                onChange={(e) => setFormData(prev => ({ ...prev, productName: e.target.value }))}
                placeholder="Product Name"
                className={`w-full h-10 px-3 rounded border border-black shadow-sm ${
                  !isEditing ? 'bg-gray-100' : ''
                }`}
                disabled={!isEditing}
              />
            </div>
            <div className="relative">
              <div className="flex items-center">
                <span className="absolute left-3">₹</span>
                <input
                  value={formData.productPrice}
                  onChange={(e) => setFormData(prev => ({ ...prev, productPrice: e.target.value }))}
                  placeholder="Price"
                  className={`w-full h-10 pl-6 pr-3 rounded border border-black shadow-sm ${
                    !isEditing ? 'bg-gray-100' : ''
                  }`}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <hr className="border-t border-black" />
          <ProductSpecifications
            productNumber={productNumber}
            specs={formData.specs}
            onChange={handleSpecChange}
            disabled={!isEditing}
          />

          <hr className="border-t border-black" />
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Product Description"
            rows={3}
            className={`w-full p-2 rounded border border-black shadow-sm ${
              !isEditing ? 'bg-gray-100' : ''
            }`}
            disabled={!isEditing}
          />
        </div>
      </div>
    </section>
  );
}

function EmployeeTable() {
  const [profile, setProfile] = useState({
   name: localStorage.getItem("username") || "",
  specialization: "Silver Ornaments Expert",
  contact: localStorage.getItem("phoneNumber") || "",
  artisanId: localStorage.getItem("ArtisanId") || "",
  isEditing: false,
  });
  const handleEditToggle = () => {
    setProfile((prev) => ({ ...prev, isEditing: !prev.isEditing }));
  };

  const handleSaveProfile = async () => {
    try {
      if (profile.contact.length !== 10) {
        alert("Contact number must be 10 digits");
        return;
      }

      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${backendUrl}/auth/profile`,
        {
          specialization: profile.specialization?.trim() || null,
          PhoneNumber: profile.contact,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setProfile({
        ...response.data.profile,
        isEditing: false,
        specialization: response.data.profile.specialization || "Not Specified",
      });

      alert("Profile updated successfully!");
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      if (errorMessage?.includes("already exists")) {
        alert(
          "This contact number is already registered. Please use a different number."
        );
      } else {
        alert(errorMessage || "Failed to update profile");
      }
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${backendUrl}/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfile({
          ...response.data.profile,
          isEditing: false,
        });

        // Update local storage
        localStorage.setItem("username", response.data.profile.name);
        localStorage.setItem("phoneNumber", response.data.profile.contact);
      } catch (error) {
        console.error("Profile fetch error:", error);
      }
    };

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        fetchProfile();
      } catch (error) {
        console.error("Token decode error:", error);
      }
    }
  }, []);

  // Removed delete functionality

  return (
    <section className="w-full mb-6 bg-white border border-solid border-neutral-200 rounded-lg">
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-2 py-3 px-4 md:px-6 text-sm font-medium text-neutral-700 bg-neutral-50 border-b border-neutral-200 rounded-t-lg">
        <div className="col-span-3">Name</div>
        <div className="col-span-4">Specialization</div>
        <div className="col-span-4">Contact Details</div>
        <div className="col-span-1 text-center">Actions</div>
      </div>

      {/* Profile Row */}
      <div className="grid grid-cols-12 gap-2 py-3 px-4 md:px-6 text-sm">
        <div className="col-span-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center">
            {profile.name?.[0]?.toUpperCase() || "A"}
          </div>
          {profile.isEditing ? (
            <input
              value={profile.name}
              disabled // Disable name editing
              className="border rounded px-2 py-1 w-32 bg-gray-100"
            />
          ) : (
            <div className="font-normal text-neutral-800">
              {profile.name || "Artisan Profile"}
            </div>
          )}
        </div>

        <div className="col-span-4 flex items-center font-normal text-neutral-600">
          {profile.isEditing ? (
            <input
              value={profile.specialization || ""}
              onChange={(e) =>
                setProfile((p) => ({
                  ...p,
                  specialization: e.target.value || null,
                }))
              }
              className="border rounded px-2 py-1 w-full"
              placeholder="Enter specialization"
            />
          ) : (
            profile.specialization || "Not Specified"
          )}
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
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          {profile.isEditing ? (
            <input
              value={profile.contact}
              maxLength={10}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, ""); // Only numbers
                setProfile((p) => ({ ...p, contact: val.slice(0, 10) }));
              }}
              className="border rounded px-2 py-1 w-full"
              placeholder="10-digit contact number"
            />
          ) : (
            <span className="text-neutral-600">
              {profile.contact || "No contact provided"}
            </span>
          )}
        </div>

        <div className="col-span-1 flex justify-center items-center gap-2">
          {profile.isEditing ? (
            <>
              <button
                onClick={handleSaveProfile}
                className="p-1 text-green-600 hover:text-green-800"
                title="Save"
              >
                <Save size={16} />
              </button>
              <button
                onClick={handleEditToggle}
                className="p-1 text-gray-600 hover:text-gray-800"
                title="Cancel"
              >
                ✕
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="p-1 text-blue-600 hover:text-blue-800"
              title="Edit"
            >
              <Edit2 size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default function EmployeeDashboard() {
  const [products, setProducts] = useState([]);
  const [drafts, setDrafts] = useState([{ id: 'initial-draft' }]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }

    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decoded.exp * 1000;
      if (Date.now() > expirationTime) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    } catch (error) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login';
        return;
      }
      const decoded = JSON.parse(atob(token.split('.')[1]));
      const res = await axios.get(`${productUrl}/${decoded.artisanId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(res.data);
      setDrafts(prev => res.data.length === 0 ? [{ id: 'initial-draft' }] : []);
    } catch (error) {
      console.error('Fetch error:', error);
      if (error.response?.status === 401 || error.message === "Network Error") {
        localStorage.removeItem('token');
        alert('Session expired or invalid. Please log in again.');
        window.location.href = '/login';
      } else {
        alert(`Failed to load products: ${error.response?.data?.message || error.message}`);
      }
    }
  };

  const handleAddSlot = () => {
    if (products.length + drafts.length < 3) {
      setDrafts(prev => [...prev, { id: `draft-${Date.now()}` }]);
    }
  };

  const handleDelete = (deletedId) => {
    const idString = String(deletedId);
    
    if (idString.startsWith('draft-')) {
      setDrafts(prev => prev.filter(d => d.id !== idString));
    } else {
      setProducts(prev => prev.filter(p => String(p.id) !== idString));
    }
    fetchProducts();
  };

  const handleListAll = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${backendUrl}/products/list-products`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(response.data.message);
      fetchProducts();
    } catch (error) {
      alert(error.response?.data?.message || 'Listing failed. Please try again.');
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

          <div className="mt-4 flex justify-end gap-4">
            <button
              onClick={handleListAll}
              disabled={products.length !== 3}
              className={`flex items-center gap-2 
                ${products.length === 3  
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-400 cursor-not-allowed'} text-white px-5 py-2 rounded-md`}
            >
              <UploadCloud size={16} /> 
              {products[0]?.is_listed ? 'Update Listing' : 'List All Products'}
            </button>
          </div>

          <div className="mt-8 w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Manage Products
              </h2>
              {products.length + drafts.length < 3 && (
                <button
                  onClick={handleAddSlot}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  <Plus size={16} /> Add More Products
                </button>
              )}
            </div>

            <div className="space-y-8">
              {products.map((product, index) => (
                <ProductForm
                  key={product.id}
                  productNumber={index + 1}
                  product={product}
                  onDelete={() => handleDelete(product.id)}
                  fetchProducts={fetchProducts}
                />
              ))}
              
              {drafts.map((draft, index) => (
                <ProductForm
                  key={draft.id}
                  productNumber={products.length + index + 1}
                  product={{ ...draft, id: draft.id }}
                  onDelete={handleDelete}
                  isNewSlot={true}
                  fetchProducts={fetchProducts}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </AnimatedPage>
  );
}