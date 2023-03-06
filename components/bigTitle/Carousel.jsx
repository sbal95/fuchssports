import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appenDots: (dots) => (
      <div
        style={{
          color: "yellow",
          padding: "10px",
        }}
      >
        <ul
          style={{
            marginTop: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="h-screen w-full">
      <Slider {...settings}>
        <div className=" min-h-screen w-full">
          <Image src="/images/Main.PNG" layout="fill" className="z-0" />
          <div className=" text-gray-300 w-full h-full container mx-auto items-start gap-y-20 ml-[10%] font-roboto absolute">
            <p className="xl:text-5xl  text-2xl font-roboto w-full flex flex-col lg:mt-[40%] mt-64 gap-y-8">
              <span>
                TFF 2.lig ve TFF 3.lig Heyecanı Sadece Fuchs Sports'ta!
                <br />
              </span>
              <span>
                Hemen
                <span className="hover:text-6xl duration-300 ">
                  <a
                    href="https://app.fuchssports.com.tr/Account/Signup"
                    className="px-5 font-black underline "
                  >
                    Üye Ol!
                  </a>
                </span>
                Heyecanı Kaçırma!
              </span>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
