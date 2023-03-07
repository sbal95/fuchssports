import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-zinc-900 bg-opacity-60 px-2 sm:px-4 py-10  fixed w-full z-10 top-0 left-0 border-b-[1px] border-gray-300 rounded-b-lg">
        <div class="flex flex-wrap items-center sm:justify-between justify-center gap-y-5 lg:gap-y-0 mx-auto">
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
          <div class="flex md:order-2 gap-x-5 lg:pr-28">
            <a
              href="https://app.fuchssports.com.tr/login"
              type="button"
              class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Giriş Yap
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-base text-gray-300 rounded-lg md:hidden focus:ring-2"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            ></button>
            <a
              href="https://app.fuchssports.com.tr/Account/Signup"
              type="button"
              class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Üye Ol
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-base text-gray-300 rounded-lg md:hidden focus:ring-2"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            ></button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
