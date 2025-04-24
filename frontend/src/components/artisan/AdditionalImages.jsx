import React from "react";

function AdditionalImages({ productNumber }) {
  return (
    <div>
      <h3 className="text-sm font-normal leading-tight text-black mb-2">
        Add more pictures
      </h3>

      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4].map((index) => (
          <button
            key={index}
            className="flex items-center justify-center w-10 h-10 bg-zinc-300 sm:w-10 sm:h-10 xs:w-8 xs:h-8"
            aria-label={`Add additional image ${index} for product ${productNumber}`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-4 sm:h-4 xs:w-3 xs:h-3"
            >
              <path d="M8 0V16" stroke="#888888" strokeWidth="2" />
              <path d="M0 8H16" stroke="#888888" strokeWidth="2" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AdditionalImages;
