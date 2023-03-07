import React, { useState } from "react";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import AcikRiza from "../documents/acikriza";
import CerezPolitikasi from "../documents/cerezPolitikasi";
import UyelikSozlesmesi from "../documents/uyelikSozlesmesi";
import GizlilikPolitikasi from "../documents/gizlilikPolitikasi";
import Iletisimİzni from "../documents/iletisimİzni";
import KullaniciSozlesmesi from "../documents/kullaniciSozlesmesi";
import OnBilgilendirme from "../documents/onBilgilendirme";

const Footer = () => {
  const [document, setDocument] = useState(false);
  const [selectedDocument, setselectedDocument] = useState(0);

  const modalChance = () => {
    if (document === true) {
      setDocument(false);
    } else {
      setDocument(true);
    }
  };

  const acikRiza = () => {
    setDocument(true);
    setselectedDocument(1);
  };
  const cerez = () => {
    setDocument(true);
    setselectedDocument(2);
  };

  const uyelik = () => {
    setDocument(true);
    setselectedDocument(3);
  };
  const gizlilik = () => {
    setDocument(true);
    setselectedDocument(4);
  };
  const iletisim = () => {
    setDocument(true);
    setselectedDocument(5);
  };
  const kullanici = () => {
    setDocument(true);
    setselectedDocument(6);
  };
  const bilgilendirme = () => {
    setDocument(true);
    setselectedDocument(7);
  };

  return (
    <footer class="p-4 gap-y-20 flex-col md:flex-row flex rounded-lg shadow md:flex md:items-center md:justify-around md:p-6 md:py-12 bg-zinc-900 border-t-[1px] border-gray-300">
      <span class="text-sm text-gray-500 sm:text-center flex sm:flex-row flex-col sm:justify-items-end justify-items-center gap-x-5">
        <a
          href="https://app.fuchssports.com.tr/login"
          class="flex items-center pl-5 w-full justify-center"
        >
          <img
            src="/images/LogInLogo.svg"
            class="h-6 sm:h-12 w-96 hover:scale-110 duration-700"
            alt="Flowbite Logo"
          />
        </a>
        <p class="text-sm text-gray-500 flex place-items-end mb-3 text-center justify-center">
          © 2023 . All Rights Reserved.
        </p>
      </span>
      <div className=" flex flex-col justify-center items-center text-gray-300 -mt-10 gap-y-1">
        <span className="text-xl font-bold py-2 w-full border-b-[1px] border-white text-center">
          HAKKIMIZDA
        </span>
        <ul className="grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-x-3 gap-y-2">
          <button onClick={acikRiza}>
            <li>Açık Rıza Metni</li>
          </button>
          <button onClick={cerez}>
            <li>Çerez Politikası</li>
          </button>
          <button onClick={uyelik}>
            <li>Üyelik Sözleşmesi</li>
          </button>
          <button onClick={gizlilik}>
            <li>Gizlilik Politikası</li>
          </button>
          <button onClick={iletisim}>
            <li>İletişim İzni</li>
          </button>
          <button onClick={kullanici}>
            <li>Kullanıcı Sözleşmesi</li>
          </button>
          <button onClick={bilgilendirme}>
            <li>Ön Bilgilendirme Metni</li>
          </button>
        </ul>
      </div>
      <ul class="flex flex-row items-center justify-center text-3xl gap-x-5 md:mr-5 text-gray-400">
        <button></button>
        <li>
          <a
            href="https://www.youtube.com/channel/UCloDZ3e3vd7fg2TPaFIUlYg"
            class="hover:underline  hover:text-gray-300 "
          >
            <BsYoutube className="hover:scale-150 duration-700" />
          </a>
        </li>
        <button></button>
        <li>
          <a
            href="https://twitter.com/FuchsSports"
            class="hover:underline  hover:text-gray-300"
          >
            <BsTwitter className="hover:scale-150 duration-700" />
          </a>
        </li>
      </ul>
      <div
        className={`w-screen h-screen bg-white bg-opacity-50 z-50 top-0 left-0 ${
          document === true ? "fixed" : "hidden"
        }`}
      >
        {/* 1 */}
        <div
          className={`${
            selectedDocument === 1 ? " flex" : "hidden"
          } overflow-auto`}
        >
          <div className="w-screen h-screen">
            <div className="font-roboto text-justify flex w-screen h-screen ">
              <div className="rounded-3xl shadow-2xl shadow-slate-900 container mx-auto relative my-auto flex text-sm bg-white justify-center items-center flex-col px-[15%] py-[6%] gap-y-8">
                <button onClick={modalChance}>
                  <AiOutlineClose className="absolute sm:right-20 sm:top-12 right-10 top-5 text-xl" />
                </button>
                <AcikRiza />
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div
          className={`${
            selectedDocument === 2 ? " flex" : "hidden"
          } overflow-auto`}
        >
          <div className="w-screen h-screen">
            <div className="font-roboto text-justify flex w-screen h-screen ">
              <div className="rounded-3xl shadow-2xl shadow-slate-900 container mx-auto relative my-auto flex text-sm bg-white justify-center items-center flex-col px-[15%] py-[6%] gap-y-8">
                <button onClick={modalChance}>
                  <AiOutlineClose className="absolute sm:right-20 sm:top-12 right-10 top-5 text-xl" />
                </button>
                <CerezPolitikasi />
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div
          className={`${
            selectedDocument === 3 ? " flex" : "hidden"
          } overflow-auto`}
        >
          <div className="w-screen h-screen">
            <div className="font-roboto text-justify flex w-screen h-screen ">
              <div className="rounded-3xl shadow-2xl shadow-slate-900 container mx-auto relative my-auto flex text-sm bg-white justify-center items-center flex-col px-[15%] py-[6%] gap-y-8">
                <button onClick={modalChance}>
                  <AiOutlineClose className="absolute sm:right-20 sm:top-12 right-10 top-5 text-xl" />
                </button>
                <UyelikSozlesmesi />
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div
          className={`${
            selectedDocument === 4 ? " flex" : "hidden"
          } overflow-auto`}
        >
          <div className="w-screen h-screen">
            <div className="font-roboto text-justify flex w-screen h-screen ">
              <div className="rounded-3xl shadow-2xl shadow-slate-900 container mx-auto relative my-auto flex text-sm bg-white justify-center items-center flex-col px-[15%] py-[6%] gap-y-8">
                <button onClick={modalChance}>
                  <AiOutlineClose className="absolute sm:right-20 sm:top-12 right-10 top-5 text-xl" />
                </button>
                <GizlilikPolitikasi />
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div
          className={`${
            selectedDocument === 5 ? " flex" : "hidden"
          } overflow-auto`}
        >
          <div className="w-screen h-screen">
            <div className="font-roboto text-justify flex w-screen h-screen ">
              <div className="rounded-3xl shadow-2xl shadow-slate-900 container mx-auto relative my-auto flex text-sm bg-white justify-center items-center flex-col px-[15%] py-[6%] gap-y-8">
                <button onClick={modalChance}>
                  <AiOutlineClose className="absolute sm:right-20 sm:top-12 right-10 top-5 text-xl" />
                </button>
                <Iletisimİzni />
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div
          className={`${
            selectedDocument === 6 ? " flex" : "hidden"
          } overflow-auto`}
        >
          <div className="w-screen h-screen">
            <div className="font-roboto text-justify flex w-screen h-screen ">
              <div className="rounded-3xl shadow-2xl shadow-slate-900 container mx-auto relative my-auto flex text-sm bg-white justify-center items-center flex-col px-[15%] py-[6%] gap-y-8">
                <button onClick={modalChance}>
                  <AiOutlineClose className="absolute sm:right-20 sm:top-12 right-10 top-5 text-xl" />
                </button>
                <KullaniciSozlesmesi />
              </div>
            </div>
          </div>
        </div>
        {/* 7 */}
        <div
          className={`${
            selectedDocument === 7 ? " flex" : "hidden"
          } overflow-auto`}
        >
          <div className="w-screen h-screen">
            <div className="font-roboto text-justify flex w-screen h-screen ">
              <div className="rounded-3xl shadow-2xl shadow-slate-900 container mx-auto relative my-auto flex text-sm bg-white justify-center items-center flex-col px-[15%] py-[6%] gap-y-8">
                <button onClick={modalChance}>
                  <AiOutlineClose className="absolute sm:right-20 sm:top-12 right-10 top-5 text-xl" />
                </button>
                <OnBilgilendirme />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
