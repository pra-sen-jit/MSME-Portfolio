import React from "react";

function Navigation() {
  return (
    <nav
      className="flex flex-col pt-3.5 pr-9 pb-8 pl-4 mt-4 text-xl text-white bg-black rounded-lg border border-white border-solid max-md:pr-5 max-md:max-w-full"
      aria-label="Main navigation"
    >
      <a
        href="#"
        className="self-start hover:underline focus:underline focus:outline-white"
        aria-current="page"
      >
        HOME
        <br />
      </a>
      <a
        href="#"
        className="z-10 self-start mt-0 ml-64 hover:underline focus:underline focus:outline-white max-md:ml-2.5"
      >
        ABOUT <br />
      </a>
      <a
        href="#"
        className="z-10 self-center -mt-3 hover:underline focus:underline focus:outline-white"
      >
        PRODUCT
      </a>
      <a
        href="#"
        className="z-10 self-end mt-0 mr-80 hover:underline focus:underline focus:outline-white max-md:mr-2.5"
      >
        ARTISAN
      </a>
      <a
        href="#"
        className="z-10 self-end mt-0 hover:underline focus:underline focus:outline-white"
      >
        CONTACT US
      </a>
    </nav>
  );
}

export default Navigation;
