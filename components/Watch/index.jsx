import React from "react";
import Image from "next/image";

const Watch = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-12  py-24 relative">
      <div className="relative container mx-auto w-[45%] h-[45%] pt-44">
        <Image src="/images/devices.svg" layout="fill" />
      </div>
      <div className="xl:text-5xl text-2xl font-roboto container mx-auto xl:px-64 px-20 text-center text-neutral-200 w-full">
        Hemen üye ol, cepte, tablette, bilgisayarda, istediğin zaman, istediğin
        yerde Fuchs Sports İçeriklerini, Google Play, AppGallery, App Store,
        Apple TV ve Android TV'den izlemeye başla.
      </div>
    </div>
  );
};

export default Watch;
