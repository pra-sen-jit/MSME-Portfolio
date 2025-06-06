import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerFeedback from "../CustomerFeedback";
import { FaCommentAlt, FaEye, FaTimes } from "react-icons/fa";

function ArtisanDatabase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState(
    "All Specializations"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArtisanId, setSelectedArtisanId] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({ name: "", message: "" });
  const [viewFeedbacks, setViewFeedbacks] = useState([]);
  const artisansPerPage = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const specializations = [
    "All Specializations",
    "Ornaments",
    "Idol Maker",
    "Metalworking",
    "Utensils",
    "Premium Products",
  ];

  const handleOpenFeedbackModal = (artisanId) => {
    setSelectedArtisanId(artisanId);
    setShowSubmitModal(true);
  };

  const handleViewFeedback = async (artisanId) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/feedback/${artisanId}`
      );
      setViewFeedbacks(response.data);
      setShowViewModal(true);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/api/feedback`, {
        ...feedbackForm,
        artisanId: selectedArtisanId,
      });
      setShowSubmitModal(false);
      setFeedbackForm({ name: "", message: "" });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      // Handle error
    }
  };

  useEffect(() => {
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

    fetchArtisans();
  }, [backendUrl]);

  const filteredArtisans = artisans.filter((artisan) => {
    const matchesSearch =
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (artisan.specialization &&
        artisan.specialization
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      artisan.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.artisanId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      specializationFilter === "All Specializations" ||
      (artisan.specialization &&
        artisan.specialization === specializationFilter);

    return matchesSearch && matchesSpecialization;
  });

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

  const indexOfLastArtisan = currentPage * artisansPerPage;
  const indexOfFirstArtisan = indexOfLastArtisan - artisansPerPage;
  const currentArtisans = filteredArtisans.slice(
    indexOfFirstArtisan,
    indexOfLastArtisan
  );
  const totalPages = Math.ceil(filteredArtisans.length / artisansPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold">Loading artisans...</div>
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
              disabled={filteredArtisans.length === 0}
            >
              Export to CSV
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by name, specialization, contact or artisan ID..."
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
          {/* <select
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
          </select> */}
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg mb-4">
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
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentArtisans.length > 0 ? (
                  currentArtisans.map((artisan) => (
                    <tr key={artisan.id}>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                        {artisan.name}
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                        {artisan.artisanId}
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                        {artisan.specialization || "Not specified"}
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                        {artisan.contact}
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                        <button
                          onClick={() =>
                            handleOpenFeedbackModal(artisan.artisanId)
                          }
                          className="text-blue-600 hover:text-blue-900 p-2 rounded-full hover:bg-blue-50 transition-colors"
                          title="Submit Feedback"
                        >
                          <FaCommentAlt className="inline-block text-lg" />
                        </button>
                        <button
                          onClick={() => handleViewFeedback(artisan.artisanId)}
                          className="text-green-600 hover:text-green-900 p-2 rounded-full hover:bg-green-50 transition-colors"
                          title="View Feedback"
                        >
                          <FaEye className="inline-block text-lg" />
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

          {/* Modals */}
          {showSubmitModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl p-6 max-w-md w-full transform transition-all">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Submit Feedback
                  </h3>
                  <button
                    onClick={() => setShowSubmitModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>
                <form onSubmit={handleSubmitFeedback} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={feedbackForm.name}
                      onChange={(e) =>
                        setFeedbackForm({
                          ...feedbackForm,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Feedback
                    </label>
                    <textarea
                      id="message"
                      required
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={feedbackForm.message}
                      onChange={(e) =>
                        setFeedbackForm({
                          ...feedbackForm,
                          message: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <FaCommentAlt className="mr-2" /> Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {showViewModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Feedback History
                  </h3>
                  <button
                    onClick={() => setShowViewModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>
                {viewFeedbacks.length > 0 ? (
                  viewFeedbacks.map((feedback) => (
                    <div
                      key={feedback.id}
                      className="mb-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-800">
                          {feedback.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(feedback.created_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <p className="text-gray-600">{feedback.message}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    No feedback available for this artisan
                  </div>
                )}
              </div>
            </div>
          )}

          {filteredArtisans.length > 0 && (
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
          )}
        </div>
      </main>
      {/* Customer Feedback Section */}
      <section className="px-6 md:px-10 pt-4 pb-4 md:pt-6 md:pb-6 bg-gray-50">
        <CustomerFeedback />
      </section>
    </div>
  );
}

export default ArtisanDatabase;
