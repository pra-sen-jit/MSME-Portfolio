import React from "react";

function CommunitySection() {
  return (
    <section
      className="flex flex-col items-start self-end px-20 pb-20 mt-24 max-w-full bg-opacity-0 w-[1360px] max-md:px-5 max-md:mt-10"
      aria-labelledby="community-heading"
    >
      <div className="flex flex-col pt-6 w-full  bg-opacity-0 max-w-[1063px] max-md:max-w-full">
        <h2
          id="community-heading"
          className="self-start ml-6 text-4xl font-bold leading-none text-black max-md:ml-2.5"
        >
          People & Community
        </h2>
        <div className="mt-5 bg-opacity-0 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <article className="grow px-6 pt-1.5 pb-3 w-full  bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a7f9006d1c676ce56dfe7129255aeae3d2a2d01?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                  alt="Artisan working on silver filigree"
                  className="object-contain w-full hover:translate-y-[-5px] rounded-lg aspect-square shadow-[0px_8px_10px_rgba(0,0,0,0.1)] max-md:max-w-full"
                />
                <h3 className="mt-7 text-2xl font-semibold leading-5 text-black">
                  The Artisan's Journey
                </h3>
                <p className="mt-5 mr-9 text-xl leading-4 text-zinc-700 max-md:mr-2.5">
                  Behind every piece of silver filigree lies a story of
                  dedication, passion, and artistic excellence. Our artisans
                  maintain the delicate balance between preserving traditional
                  techniques and embracing contemporary designs.
                </p>
              </article>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow items-start pt-1.5 pr-6 pb-14 w-full bg-opacity-0 max-md:mt-10 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8ded6a4d0cbf51dba913f873415875ec427fcc?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                  alt="Master artisan teaching apprentice"
                  className="object-contain hover:translate-y-[-5px] self-end max-w-full rounded-lg aspect-square shadow-[0px_8px_10px_rgba(0,0,0,0.1)] max-md:max-w-full"
                />
                <h3 className="mt-7 text-2xl font-semibold leading-none text-black">
                  Passing the Torch
                </h3>
                <p className="mt-5 text-xl leading-4 text-zinc-700">
                  The community of Magrahat takes pride in nurturing the next
                  generation of artisans, ensuring that this precious art form
                  continues to thrive and evolve.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
