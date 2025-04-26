import React from "react";

function LegacySection() {
  return (
    <section
      className="w-full px-4 py-16 md:px-10 lg:px-20 bg-white"
      aria-labelledby="legacy-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="legacy-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 relative"
        >
          Preserving the Legacy
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-1 bg-blue-600 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text section */}
          <div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              While facing modern challenges, our artisans are embracing digital
              transformation to reach global markets. Through e-commerce
              platforms and digital showcases, Magrahat's artistic heritage is
              finding new admirers worldwide.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-full text-sm font-medium text-gray-800 shadow-sm hover:shadow-md transition">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4372ff10fc8b84da1e3fb36e4fc3e2b3d8f804d?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                  alt="Digital icon"
                  className="w-4 h-4"
                />
                Digital Presence
              </span>
              <span className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-full text-sm font-medium text-gray-800 shadow-sm hover:shadow-md transition">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/94ae1dedbf3a87ddb8fba9f14719a9266b0a0476?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                  alt="E-commerce icon"
                  className="w-4 h-4"
                />
                E-commerce
              </span>
            </div>
          </div>

          {/* Image section */}
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e8dcc19d3658d7b201f497d016e2e3bc61d3109?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt="Artisan using digital tools"
              className="w-full h-auto rounded-2xl shadow-lg transform hover:-translate-y-1 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegacySection;
