import React from "react";

function ArtSection() {
  return (
    <section
      className="px-20 pt-20 pb-32 mt-11 w-full bg-gray-50 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="art-heading"
    >
      <div className="flex flex-col items-end px-20 mb-0 bg-opacity-0 max-md:pl-5 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-col items-start pb-4 w-full bg-opacity-0 max-w-[1097px] max-md:max-w-full">
          <h2
            id="art-heading"
            className="ml-4 text-4xl font-bold leading-none text-black max-md:max-w-full"
          >
            The Art of Silver Filigree
          </h2>
          <div className="self-stretch pt-1.5 pr-20 pb-6 pl-4 mt-14 bg-opacity-0 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0666b24d815016675e600d75c2719eaaff90a8e4?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                  alt="Silver filigree artwork sample"
                  className="object-contain hover:translate-y-[-5px] w-full rounded-lg aspect-square shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:mt-10"
                />
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4a49b955f134086c1d086d56c40e009ac47754a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                  alt="Silver filigree crafting process"
                  className="object-contain  hover:translate-y-[-5px] grow w-full rounded-lg aspect-square shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:mt-10"
                />
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/998d4b1414aac8718e0147e1fb5bd58ad642a4df?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                  alt="Detailed silver filigree design"
                  className="object-contain hover:translate-y-[-5px] w-full rounded-lg aspect-square shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <p className="mt-5 ml-7 text-xl leading-4 text-gray-600 max-md:max-w-full">
            The intricate art of silver filigree in Magrahat involves delicate
            manipulation of fine silver threads to create stunning pieces of
            jewelry and decorative items. This centuries-old technique requires
            immense patience, skill, and artistic vision.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArtSection;
