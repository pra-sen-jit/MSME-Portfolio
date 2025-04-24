import React from "react";

function LegacySection() {
  return (
    <section
      className="flex flex-col items-center self-center px-20 mt-36 ml-2.5 w-full  bg-opacity-0 max-w-[1300px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="legacy-heading"
    >
      <div className="flex flex-col max-w-full bg-opacity-0 w-[921px]">
        <h2
          id="legacy-heading"
          className="self-start text-3xl font-bold leading-none text-black"
        >
          Preserving the Legacy
        </h2>
        <div className="pt-1.5 pr-6 pb-11 mt-8  bg-opacity-0 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch pt-5 m-auto w-full  bg-opacity-0 max-md:mt-10 max-md:max-w-full">
                <p className="font-sans self-start text-xl leading-4 text-gray-600">
                  While facing modern challenges, our artisans are embracing
                  digital transformation to reach global markets. Through
                  e-commerce platforms and digital showcases, Magrahat's
                  artistic heritage is finding new admirers worldwide.
                </p>
                <div className="flex gap-4 items-start pr-20 pb-5 mt-9 text-sm text-black  bg-opacity-0 max-md:pr-5">
                  <span className="flex gap-2 px-4 py-2.5 bg-gray-100 rounded-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4372ff10fc8b84da1e3fb36e4fc3e2b3d8f804d?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                      alt="Digital icon"
                      className="object-contain  hover:translate-y-[-5px] shrink-0 self-start w-3.5 aspect-square"
                    />
                    <span className="basis-auto">Digital Presence</span>
                  </span>
                  <span className="flex gap-2 px-4 py-2.5 whitespace-nowrap bg-gray-100 rounded-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/94ae1dedbf3a87ddb8fba9f14719a9266b0a0476?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                      alt="E-commerce icon"
                      className="object-contain  shrink-0 self-start aspect-[1.29] w-[18px]"
                    />
                    <span>E-commerce</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e8dcc19d3658d7b201f497d016e2e3bc61d3109?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Artisan using digital tools"
                className="object-contain w-full hover:translate-y-[-5px] rounded-lg aspect-square shadow-[0px_8px_10px_rgba(0,0,0,0.1)] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegacySection;
