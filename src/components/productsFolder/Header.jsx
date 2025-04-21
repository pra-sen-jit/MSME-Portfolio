import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center w-full max-w-[1327px] mx-auto py-4 px-6 bg-white shadow-md">
      {/* Logo and Search */}
      <div className="flex items-center gap-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/375b817f500972bb37d70205858e65ae765377fe?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
          alt="Search icon"
          className="w-8 h-8"
        />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      {/* Logo */}
      <h1 className="text-3xl font-bold text-gray-800">MAGRAHAT</h1>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        <button aria-label="User account">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d80511747f7f4a8569dbe4990583a347a5c1d8a?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="User account"
            className="w-10 h-10"
          />
        </button>
        <button aria-label="Shopping cart">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c06e53a3188190e19736d3d5e3a336a6081799?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Shopping cart"
            className="w-10 h-10"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
