import React, { useState } from "react";

function ArtisanDatabase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState(
    "All Specializations"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const artisansPerPage = 10;

  // Sample artisan data (expanded to 50 items for pagination demo)
  const artisans = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Artisan ${String.fromCharCode(65 + (i % 26))}${
      i > 25 ? Math.floor(i / 26) : ""
    }`,
    specialization: [
      "Ornaments",
      "Idol Maker",
      "Metalworking",
      "Utensils",
      "Premium Products",
    ][i % 5],
    contact:
      i % 2 === 0
        ? `user${i}@example.com +1 ${Math.floor(
            100 + Math.random() * 900
          )}-${Math.floor(100 + Math.random() * 900)}-${Math.floor(
            1000 + Math.random() * 9000
          )}`
        : `+1 ${Math.floor(100 + Math.random() * 900)}-${Math.floor(
            100 + Math.random() * 900
          )}-${Math.floor(1000 + Math.random() * 9000)}`,
  }));

  const specializations = [
    "All Specializations",
    "Ornaments",
    "Idol Maker",
    "Metalworking",
    "Utensils",
    "Premium Products",
  ];

  const filteredArtisans = artisans.filter((artisan) => {
    const matchesSearch =
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.contact.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      specializationFilter === "All Specializations" ||
      artisan.specialization === specializationFilter;

    return matchesSearch && matchesSpecialization;
  });

  // CSV Export Function
  const exportToExcel = () => {
    if (filteredArtisans.length === 0) {
      alert("No artisans to export");
      return;
    }

    const dataToExport = filteredArtisans.map((artisan) => ({ ...artisan }));

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

  // Pagination
  const indexOfLastArtisan = currentPage * artisansPerPage;
  const indexOfFirstArtisan = indexOfLastArtisan - artisansPerPage;
  const currentArtisans = filteredArtisans.slice(
    indexOfFirstArtisan,
    indexOfLastArtisan
  );
  const totalPages = Math.ceil(filteredArtisans.length / artisansPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Artisans Database
          </h2>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={exportToExcel}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Export to CSV
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search artisans..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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

        {/* Table */}
        <div className="bg-white shadow overflow-hidden rounded-lg mb-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Specialization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentArtisans.length > 0 ? (
                  currentArtisans.map((artisan) => (
                    <tr key={artisan.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {artisan.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {artisan.specialization}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {artisan.contact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-green-600 hover:text-green-900 mr-3">
                          ☑
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          ☐
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No artisans found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 bg-gray-50 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstArtisan + 1} to{" "}
              {Math.min(indexOfLastArtisan, filteredArtisans.length)} of{" "}
              {filteredArtisans.length} artisans
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
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
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="px-2 py-1">...</span>
              )}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <button
                  onClick={() => paginate(totalPages)}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  {totalPages}
                </button>
              )}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
