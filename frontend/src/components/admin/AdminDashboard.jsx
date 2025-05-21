import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showProductsFor, setShowProductsFor] = useState(null);
  const [adminData, setAdminData] = useState({
    name: "",
    phoneNumber: "",
    emailId: "",
    adminId: "",
    adminPassword: "",
    adminPassKey: "",
    address: "",
    profileImage: null,
  });
  
  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("All Specializations");
  const [currentPage, setCurrentPage] = useState(1);
  const [artisans, setArtisans] = useState([]);
  const [artisanProducts, setArtisanProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const artisansPerPage = 3;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const specializations = [
    "All Specializations",
    "Ornaments",
    "Idol Maker",
    "Metalworking",
    "Utensils",
    "Premium Products",
  ];

  useEffect(() => {
    fetchAdminData();
    fetchArtisans();
  }, []);
  
  // In fetchAdminData, ensure backend returns all fields
const fetchAdminData = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/admin/profile`);
    // Ensure response contains all fields
    setAdminData({
      ...response.data,
      adminId: response.data.adminId || "N/A",
      adminPassword: response.data.adminPassword || " " ,
      adminPassKey: response.data.adminPassKey || "N/A"
    });
  } catch (error) {
    console.error("Error fetching admin data:", error);
  }
};
  
  const fetchArtisans = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/users/artisans`);
      
      if (response.data.success) {
        setArtisans(response.data.data);
      } else {
        setError("Failed to fetch artisans");
      }
    } catch (err) {
      console.error("Error fetching artisans:", err);
      setError(err.response?.data?.message || "Failed to fetch artisans");
    } finally {
      setLoading(false);
    }
  };
  
  const fetchArtisanProducts = async (artisanId) => {
    try {
      const response = await axios.get(`${backendUrl}/api/artisans/${artisanId}/products`);
      setArtisanProducts(response.data);
    } catch (error) {
      console.error("Error fetching artisan products:", error);
      setArtisanProducts([]);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAdminData((prev) => ({
        ...prev,
        profileImage: file,
      }));
    }
  };
  
  const handleSaveProfile = async () => {
    try {
      const formData = new FormData();
      
      // Add only editable fields
      formData.append("name", adminData.name);
      formData.append("phoneNumber", adminData.phoneNumber);
      formData.append("emailId", adminData.emailId);
      formData.append("address", adminData.address);
      
      if (adminData.profileImage instanceof File) {
        formData.append("profileImage", adminData.profileImage);
      }

      await axios.put(`${backendUrl}/api/admin/profile`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setIsEditing(false);
      alert("Profile updated successfully!");
      fetchAdminData(); // Refresh data
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  const handleDeleteArtisan = async (artisanId) => {
    if (window.confirm("Are you sure you want to delete this artisan?")) {
      try {
        await axios.delete(`${backendUrl}/api/artisans/${artisanId}`);
        fetchArtisans();
        alert("Artisan deleted successfully!");
      } catch (error) {
        console.error("Error deleting artisan:", error);
        alert("Failed to delete artisan.");
      }
    }
  };
  
  const handleDeleteProduct = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${backendUrl}/api/products/${productId}`);
        // Refresh products list
        fetchArtisanProducts(showProductsFor);
        alert("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product.");
      }
    }
  };
  
  const showArtisanProducts = (artisanId) => {
    setShowProductsFor(artisanId);
    fetchArtisanProducts(artisanId);
  };
  
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(); // Ensure complete cleanup
  };

  
  const handleEditArtisan = (artisanId) => {
    navigate(`/profile/${artisanId}`);
  };
  
  const exportToExcel = () => {
    if (filteredArtisans.length === 0) {
      alert("No artisans to export");
      return;
    }

    const dataToExport = filteredArtisans.map((artisan) => ({
      ID: artisan.id,
      Name: artisan.name,
      ArtisanID: artisan.artisanId,
      Specialization: artisan.specialization,
      Contact: artisan.contact,
      Password: artisan.password
    }));

    const headers = Object.keys(dataToExport[0]).join(",");
    const rows = dataToExport.map((row) => Object.values(row).join(","));
    const csvContent = [headers, ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute(
      "download",
      `artisans_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Filter artisans based on search term and specialization
  const filteredArtisans = artisans.filter((artisan) => {
    const matchesSearch =
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (artisan.specialization && artisan.specialization.toLowerCase().includes(searchTerm.toLowerCase())) ||
      artisan.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.artisanId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      specializationFilter === "All Specializations" ||
      (artisan.specialization && artisan.specialization === specializationFilter);

    return matchesSearch && matchesSpecialization;
  });
  
  // Pagination logic for artisans
  const indexOfLastArtisan = currentPage * artisansPerPage;
  const indexOfFirstArtisan = indexOfLastArtisan - artisansPerPage;
  const currentArtisans = filteredArtisans.slice(indexOfFirstArtisan, indexOfLastArtisan);
  const totalPages = Math.ceil(filteredArtisans.length / artisansPerPage);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }
  
  // Find the selected artisan
  const selectedArtisan = artisans.find((artisan) => artisan.artisanId === showProductsFor);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4">
          <button 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
            onClick={() => navigate("/")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </button>
        </div>
        <div className="flex-1">
          <div className="py-3 px-4 border-b border-gray-800 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            <span>Dashboard</span>
          </div>
          <div className="py-3 px-4 border-b border-gray-800 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <span>Artisan Database</span>
          </div>
          <div className="py-3 px-4 border-b border-gray-800 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span>Notification</span>
          </div>
        </div>
        <div className="p-4 border-t border-gray-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
            {adminData.profileImage ? (
              <img 
                src={typeof adminData.profileImage === "string" 
                  ? adminData.profileImage 
                  : URL.createObjectURL(adminData.profileImage)} 
                alt="Admin" 
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{adminData.name ? adminData.name.charAt(0) : "A"}</span>
            )}
          </div>
          <div className="truncate">{adminData.name || "Chris Krüger"}</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">
              <span className="hover:underline cursor-pointer" onClick={() => navigate("/")}>Home</span> &gt; Admin Dashboard
            </div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* Main Content Scrollable Area */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          {/* Admin Profile Section - Fixed image upload and mobile layout */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Admin Profile</h2>
                <div className="mt-2 md:mt-0">
                  {!isEditing ? (
                    <button 
                      className="bg-gray-900 hover:bg-gray-800 text-white py-1 px-4 rounded transition-colors"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded transition-colors"
                        onClick={handleSaveProfile}
                      >
                        Save
                      </button>
                      <button 
                        className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-4 rounded transition-colors"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                    {adminData.profileImage ? (
                      <img 
                        src={typeof adminData.profileImage === "string" 
                          ? adminData.profileImage 
                          : URL.createObjectURL(adminData.profileImage)} 
                        alt="Admin" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    {isEditing && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-full text-white text-center p-2">
                        <input 
                          type="file" 
                          onChange={handleProfileImageChange} 
                          className="absolute inset-0 opacity-0 cursor-pointer rounded-full"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs">Click to upload</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Non-editable admin credentials */}
                    <div className="md:col-span-2 lg:col-span-3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Admin ID</label>
                          <input
                            type="text"
                            value={adminData.adminId || ""}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Admin Password</label>
                          <input
                            type="password"
                            value={adminData.adminPassword || ""}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Admin Pass Key
                          </label>
                          <input
                            type="text"
                            value={adminData.adminPassKey || ""}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Editable fields */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={adminData.name || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={adminData.phoneNumber || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                      <input
                        type="email"
                        name="emailId"
                        value={adminData.emailId || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                      />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <textarea
                        name="address"
                        value={adminData.address || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        rows="3"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Artisan Database Section */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-xl font-semibold">Artisan Database</h2>
                <button
                  onClick={exportToExcel}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  disabled={filteredArtisans.length === 0}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Export
                </button>
              </div>

              <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search by name, specialization, contact or artisan ID..."
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  value={specializationFilter}
                  onChange={(e) => {
                    setSpecializationFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Artisan ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Specialization
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Password
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentArtisans.length > 0 ? (
                      currentArtisans.map((artisan) => (
                        <tr key={artisan.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {artisan.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {artisan.artisanId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {artisan.specialization || "Not specified"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {artisan.contact}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {artisan.password || "********"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                            <button 
                              onClick={() => handleEditArtisan(artisan.artisanId)}
                              className="p-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                              title="Edit Artisan"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </button>
                            <button 
                              onClick={() => handleDeleteArtisan(artisan.artisanId)}
                              className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                              title="Delete Artisan"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <button 
                              onClick={() => showArtisanProducts(artisan.artisanId)}
                              className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                            >
                              Products
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-6 py-4 text-center text-sm text-gray-500"
                        >
                          No artisans found matching your criteria
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {filteredArtisans.length > 0 && (
                <div className="px-6 py-3 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 rounded-b-lg">
                  <div className="text-sm text-gray-500">
                    Showing {indexOfFirstArtisan + 1} to{" "}
                    {Math.min(indexOfLastArtisan, filteredArtisans.length)} of{" "}
                    {filteredArtisans.length} artisans
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                    >
                      Previous
                    </button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                        // Complete return statement - continuation from where it was cut off
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      return (
                        <button
                          key={pageNum}
                          onClick={() => paginate(pageNum)}
                          className={`px-3 py-1 rounded ${
                            currentPage === pageNum
                              ? "bg-gray-900 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded ${
                        currentPage === totalPages
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Artisan Products Modal */}
          {showProductsFor && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">
                      Products from {selectedArtisan?.name || "Artisan"}
                    </h3>
                    <button
                      onClick={() => setShowProductsFor(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  {artisanProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {artisanProducts.map((product) => (
                        <div key={product.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                          <div className="h-48 bg-gray-200 relative">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="flex items-center justify-center h-full text-gray-500">
                                No Image
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold mb-1">{product.name}</h4>
                            <p className="text-sm text-gray-500 mb-2">
                              ₹{product.price} • {product.category || "Uncategorized"}
                            </p>
                            <p className="text-sm mb-4 line-clamp-2">
                              {product.description || "No description available"}
                            </p>
                            <div className="flex justify-end">
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No products found for this artisan
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;