import React from "react";

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1327px] max-md:max-w-full">
      <div
        className="flex gap-2.5 px-3 py-1 text-base text-black rounded-2xl bg-zinc-300 bg-opacity-50"
        role="search"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/375b817f500972bb37d70205858e65ae765377fe?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Search icon"
          className="object-contain shrink-0 aspect-square w-[35px]"
        />
        <span className="my-auto basis-auto">What are you looking for?</span>
      </div>
      <h1 className="self-stretch text-5xl text-black max-md:text-4xl">
        MAGRAHAT
      </h1>
      <div className="flex" role="navigation" aria-label="User actions">
        <button aria-label="User account">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d80511747f7f4a8569dbe4990583a347a5c1d8a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="User account"
            className="object-contain shrink-0 aspect-square w-[42px]"
          />
        </button>
        <button aria-label="Shopping cart">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c06e53a3188190e19736d3d5e3a336a6081799?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Shopping cart"
            className="object-contain shrink-0 aspect-square w-[42px]"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
