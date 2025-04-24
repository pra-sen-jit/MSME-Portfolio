import React from "react";

function AdditionalImages({ productNumber }) {
  return (
    <div>
      <h3 className="mt-5 text-xl font-bold leading-none text-black">
        Add more pictures
      </h3>

      <div className="flex flex-wrap gap-10 mt-6 ml-3.5">
        <button
          className="flex flex-col justify-center px-5 py-4 rounded-2xl bg-zinc-300"
          aria-label={`Add additional image 1 for product ${productNumber}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e07580ef94d2287a8b600e61b9ebbb605b0314d6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Add image"
            className="object-contain aspect-square w-[55px]"
          />
        </button>

        <button
          className="flex flex-col justify-center px-5 py-4 rounded-2xl bg-zinc-300"
          aria-label={`Add additional image 2 for product ${productNumber}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e07580ef94d2287a8b600e61b9ebbb605b0314d6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Add image"
            className="object-contain aspect-square w-[55px]"
          />
        </button>

        <button
          className="flex flex-col justify-center px-5 py-4 rounded-2xl bg-zinc-300"
          aria-label={`Add additional image 3 for product ${productNumber}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e07580ef94d2287a8b600e61b9ebbb605b0314d6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Add image"
            className="object-contain aspect-square w-[55px]"
          />
        </button>

        <button
          className="flex flex-col justify-center px-5 py-4 rounded-2xl bg-zinc-300"
          aria-label={`Add additional image 4 for product ${productNumber}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e07580ef94d2287a8b600e61b9ebbb605b0314d6?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
            alt="Add image"
            className="object-contain aspect-square w-[55px]"
          />
        </button>
      </div>
    </div>
  );
}

export default AdditionalImages;
