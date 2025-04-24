import React from "react";

function Header() {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1331px] max-md:max-w-full">
      <div
        className="flex gap-2.5 px-3 py-1 text-base text-black rounded-2xl bg-zinc-300 bg-opacity-50"
        role="search"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eecae916fdf26fb809c771253759047f2f03c46c?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Search icon"
          className="object-contain shrink-0 aspect-square w-[35px]"
        />
        <span className="my-auto basis-auto">What are you looking for?</span>
      </div>

      <h2 className="self-stretch text-5xl text-black max-md:text-4xl">
        MAGRAHAT
      </h2>

      <div className="flex gap-2">
        <button aria-label="Notification">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/922b80cdb9e3dc6f91a6cfddc0f16b1eae74ff38?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Notification icon"
            className="object-contain shrink-0 aspect-square w-[42px]"
          />
        </button>
        <button aria-label="User profile">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c06e53a3188190e19736d3d5e3a336a6081799?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="User profile icon"
            className="object-contain shrink-0 aspect-square w-[42px]"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
