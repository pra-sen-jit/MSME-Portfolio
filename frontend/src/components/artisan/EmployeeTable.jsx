import React from "react";

function EmployeeTable() {
  return (
    <section
      className="self-stretch py-1 w-full bg-white rounded-lg border border-solid border-neutral-200 max-md:max-w-full"
      aria-labelledby="employee-table-heading"
    >
      <h2 id="employee-table-heading" className="sr-only">
        Employee Information
      </h2>

      <div className="flex flex-wrap gap-10 py-3.5 pr-11 pl-4 max-w-full text-base rounded-lg border-b bg-neutral-50 border-neutral-200 text-neutral-700 w-[1332px] max-md:pr-5">
        <div className="flex flex-wrap flex-auto max-md:max-w-full">
          <div className="pt-0.5 pb-2.5 whitespace-nowrap bg-opacity-0 font-medium">
            Name
          </div>
          <div className="py-1.5 ml-20 whitespace-nowrap  bg-opacity-0 font-medium">
            Specialization
          </div>
          <div className="pt-0.5 pb-2.5 ml-20  bg-opacity-0 font-medium">
            Contact Details
          </div>
        </div>
        <div className="pt-0.5 pb-2.5 whitespace-nowrap  bg-opacity-0 font-medium">
          Actions
        </div>
      </div>

      <div className="flex flex-wrap gap-10 py-3.5 pr-11 pl-4 w-full  bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-wrap flex-auto max-md:max-w-full">
          <div className="flex gap-3 bg-black bg-opacity-0">
            <div className="flex justify-center items-center min-h-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e8d0f98f086f2e60ad1a5b4ed65ccbd54198e9?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Artisan A profile"
                className="object-contain self-stretch my-auto w-8 rounded-full aspect-square"
              />
            </div>
            <div className="flex-auto self-start text-base leading-none text-neutral-800">
              Artisan A
            </div>
          </div>
          <div className="py-2.5 ml-10 text-base  bg-opacity-0 text-neutral-600">
            Silver Ornaments expert
          </div>
          <div className="flex gap-2 py-2 ml-10  bg-opacity-0">
            <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/21b23fe47b3b2f96f45b5dbe6a5b03433d75f859?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
                alt="Email icon"
                className="object-contain self-stretch my-auto w-4 aspect-square"
              />
            </div>
            <div className="flex-auto text-base text-neutral-600">
              maria@example.com
            </div>
          </div>
        </div>
        <div className="flex gap-3 py-2 pr-10  bg-opacity-0">
          <button aria-label="Edit artisan">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d324e187af406572646d02163a6b5e417dee121?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt="Edit"
              className="object-contain shrink-0 w-4 aspect-square"
            />
          </button>
          <button aria-label="Delete artisan">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/232f39f16f9f4ac86be1b8d5e666b9f3956a1d37?placeholderIfAbsent=true&apiKey=6db93a0a2eaa482cb9c3ed3428be7ade"
              alt="Delete"
              className="object-contain shrink-0 w-3.5 aspect-[0.87]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default EmployeeTable;
