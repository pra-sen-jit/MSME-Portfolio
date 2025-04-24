import React from "react";

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
        {/* Name Column */}
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

        {/* Specialization Column */}
        <div className="col-span-4 flex items-center font-normal text-neutral-600">
          Silver Ornaments expert
        </div>

        {/* Contact Details Column */}
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
            className="font-normal text-neutral-600 hover:text-blue-600 hover:underline transition-colors duration-200 active:text-blue-800"
          >
            maria@example.com
          </a>
        </div>

        {/* Actions Column */}
        <div className="col-span-1 flex justify-center items-center gap-3">
          <button
            aria-label="Edit artisan"
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
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

export default EmployeeTable;
