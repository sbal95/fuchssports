import React from "react";
import { BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-zinc-900 border-t-[1px] border-gray-300">
      <span class="text-sm text-gray-500 sm:text-center flex justify-items-end">
        <a
          href="https://app.fuchssports.com.tr/login"
          class="flex items-center pl-5"
        >
          <img
            src="/images/LogInLogo.svg"
            class="h-6 mr-3 sm:h-12 w-96 hover:scale-110 duration-700"
            alt="Flowbite Logo"
          />
        </a>
        <p class="text-sm text-gray-500 flex place-items-end mb-3">
          © 2023 . All Rights Reserved.
        </p>
      </span>
      <ul class="flex flex-wrap items-center pt-5 text-3xl ite pr-28 justify-center gap-x-10 text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.youtube.com/channel/UCloDZ3e3vd7fg2TPaFIUlYg"
            class="mr-4 hover:underline md:mr-6 hover:text-gray-300 "
          >
            <BsYoutube className="hover:scale-150 duration-700" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/FuchsSports"
            class="mr-4 hover:underline md:mr-6 hover:text-gray-300"
          >
            <BsTwitter className="hover:scale-150 duration-700" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
