import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-zinc-900 bg-opacity-90 px-2 sm:px-4 py-10  fixed w-full z-10 top-0 left-0 border-b-[1px] border-gray-300 rounded-b-lg">
        <div class="flex sm:flex-row flex-col items-center sm:justify-between justify-center gap-y-5 lg:gap-y-0 mx-auto">
          <a
            href="https://app.fuchssports.com.tr/login"
            class="flex items-center pl-5 hover:scale-110 duration-700"
          >
            <img
              src="/images/LogInLogo.svg"
              class="h-12 mr-3 lg:h-20 w-96"
              alt="Flowbite Logo"
            />
          </a>
          <div class="flex md:order-2 gap-x-5 lg:pr-28 justify-center items-center">
            <a
              href="https://app.fuchssports.com.tr/login"
              type="button"
              class="bg-red-800  font-medium rounded-full text-lg w-32 text-white hover:bg-red-400 h-12 justify-center flex items-center text-center mr-3"
            >
              Giriş Yap
            </a>

            <a
              href="https://app.fuchssports.com.tr/Account/Signup"
              type="button"
              class="bg-red-800  font-medium rounded-full text-lg w-32 text-white hover:bg-red-400 h-12 justify-center flex items-center text-center mr-3"
            >
              Üye Ol
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
