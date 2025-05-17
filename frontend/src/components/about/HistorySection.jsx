import React from "react";

function HistorySection() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-16"
      aria-labelledby="history-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2
            id="art-heading"
            className="text-3xl sm:text-3xl font-bold text-center text-gray-900 relative"
          >
            History & Heritage
            <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 bg-blue-600 rounded-full"></span>
          </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
          <div className="w-full md:w-3/5">
            <article className="text-gray-600">
              <p className="text-base lg:text-lg mb-6 leading-relaxed">
                Magrahat's rich history dates back to ancient times, where it
                flourished as a center of art and culture under various
                dynasties. The region's strategic location along historic trade
                routes made it a melting pot of artistic influences.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                The legacy of craftsmanship, particularly in silver filigree
                work, has been passed down through generations, making Magrahat
                a living museum of artistic excellence.
              </p>
            </article>
          </div>

          <div className="w-full md:w-2/5">
            <div className="aspect-square max-w-sm mx-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc5e627a658559614f429b8e6de1f7f583585dc3?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Historical artifacts from Magrahat"
                className="w-full h-full rounded-lg shadow-lg object-cover transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
