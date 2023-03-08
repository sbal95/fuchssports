import React from "react";

const Watch = () => {
  return (
    <div className="w-full flex flex-col gap-y-12 text-neutral-200 py-44">
      <div className="container mx-auto flex text-9xl justify-center items-center gap-x-5">
        <i className="bi bi-google-play"></i>
        <i className="bi bi-apple"></i>
        <i className="bi bi-laptop"></i>
      </div>
      <div className="xl:text-5xl text-2xl font-roboto relative container mx-auto xl:px-64 px-20 text-center w-full">
        Hemen üye ol, Web Tarayıcı, Ios ve Android mobil cihazlarda izlemeye
        başla.
      </div>
    </div>
  );
};

export default Watch;
