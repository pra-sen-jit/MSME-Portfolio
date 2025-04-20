import React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col self-stretch pt-px pb-64 my-auto w-full bg-black bg-opacity-0 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <h3 className="self-start text-3xl font-bold leading-none text-black">
        Connect With Us
      </h3>

      <address className="flex flex-col items-start py-1 pr-20 mt-8 w-full bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full not-italic">
        <div className="flex gap-7 max-w-full w-[268px]">
          <div className="flex overflow-hidden justify-center items-center my-auto min-h-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f42e0e37ee91410d45ddd1106843a708841163fb?placeholderIfAbsent=true"
              alt="Location icon"
              className="object-contain overflow-hidden self-stretch my-auto w-3 aspect-square"
            />
          </div>
          <p className="grow shrink text-xl leading-none text-black w-[226px]">
            Magrahat, West Bengal, India
          </p>
        </div>

        <div className="flex gap-6 mt-5 max-w-full w-[275px]">
          <div className="flex overflow-hidden justify-center items-center my-auto min-h-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc4bfdcd47dac95708bfdf0186b3b1ff066c840?placeholderIfAbsent=true"
              alt="Email icon"
              className="object-contain overflow-hidden self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <a
            href="mailto:contact@magrahatfiligree.com"
            className="grow shrink text-xl leading-none text-black w-[232px]"
          >
            contact@magrahatfiligree.com
          </a>
        </div>

        <div className="flex gap-6 mt-5 max-w-full w-[153px]">
          <div className="flex overflow-hidden justify-center items-center my-auto min-h-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8c877aca77d86bd2fa671d14931c4505761a9b3?placeholderIfAbsent=true"
              alt="Phone icon"
              className="object-contain overflow-hidden self-stretch my-auto w-4 aspect-square"
            />
          </div>
          <a
            href="tel:+911234567890"
            className="grow shrink text-xl leading-none text-black w-[110px]"
          >
            +91 1234567890
          </a>
        </div>
      </address>

      <div className="flex flex-col py-px mt-8 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <h4 className="self-start text-2xl leading-none text-black">
          Follow Us
        </h4>

        <div className="flex gap-4 pr-20 mt-6 bg-black bg-opacity-0 max-md:pr-5">
          <a href="#" aria-label="Facebook">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d47ebb1839a6ae76851c12fd7cc3de3f833a4207?placeholderIfAbsent=true"
              alt="Facebook"
              className="object-contain overflow-hidden shrink-0 w-6 aspect-square"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30cc39378a3f1fd5be3c76bf40ee76f8eb1ee241?placeholderIfAbsent=true"
              alt="Twitter"
              className="object-contain overflow-hidden shrink-0 aspect-square w-[21px]"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60148ad55d6056c1065566681d6b746776e01369?placeholderIfAbsent=true"
              alt="Instagram"
              className="object-contain overflow-hidden shrink-0 w-6 aspect-square"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
