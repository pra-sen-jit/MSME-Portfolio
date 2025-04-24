import React from "react";

function HistorySection() {
  return (
    <section
      className="flex flex-col items-center self-center px-20 ml-6 max-w-full bg-opacity-0 w-[1280px] max-md:px-5"
      aria-labelledby="history-heading"
    >
      <div className="flex flex-col max-w-full  bg-opacity-0 w-[965px]">
        <h2
          id="history-heading"
          className="self-start text-4xl font-bold leading-none text-black"
        >
          History & Heritage
        </h2>
        <div className="pt-1.5 pr-6 pb-11 mt-5  bg-opacity-0 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <article className="self-stretch pr-7 pb-2.5 my-auto w-full text-xl leading-4 text-gray-600  bg-opacity-0 max-md:mt-10 max-md:max-w-full">
                <p className=" font-sans z-10 mt-0 max-md:mr-0.5">
                  Magrahat's rich history dates back to ancient times, where it
                  flourished as a center of art and culture under various
                  dynasties. The region's strategic location along historic
                  trade routes made it a melting pot of artistic influences.
                </p>
                <p className="font-sans mt-16 max-md:mt-10">
                  The legacy of craftsmanship, particularly in silver filigree
                  work, has been passed down through generations, making
                  Magrahat a living museum of artistic excellence.
                </p>
              </article>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc5e627a658559614f429b8e6de1f7f583585dc3?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Historical artifacts from Magrahat"
                className="object-contain w-full hover:translate-y-[-5px] rounded-lg aspect-square shadow-[0px_8px_10px_rgba(0,0,0,0.1)] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
