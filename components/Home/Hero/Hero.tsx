import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-30 bg-[#F0EBE1]">
      <div className="w-[90%] mx-auto pb-10">
        <div className="relative w-full h-[70vh] ">
          <div className="absolute w-full h-full top-0 left-0 bg-[#262522]/60 rounded-[32px] "></div>
          <Image
            src="/images/chef.jpg"
            alt="image"
            width={1500}
            height={1500}
            className="w-full h-full object-cover rounded-[32px]    "
          />
          <div className="absolute z-[100] w-[80%] lg:w-[90%] xl:w-[70%] h-full top-[50%] left-[50%] pt-40 md:pt-20 lg:pt-60 xl:pt-20 text-center translate-x-[-50%] translate-y-[-50%]">
            <h1 className="font-extrabold text-[38px] md:text-[50px]  xl:text-[80px] lg:text-[70px] text-[#F0EBE1] uppercase">
              Unleash Culinary Excellence
            </h1>
            <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-[#F0EBE1] ">
              Explore a world of flavors, discover handcrafted recipes, and let
              the aroma of our passion for cooking fill your kitchen
            </p>
            <button className="px-[24px] py-[12px] rounded-[24px] uppercase bg-[#F29C33] font-medium text-[14px] text-[#262522] mt-5 ">
              Explore Recipes{" "}
            </button>
          </div>
        </div>
        <div className="w-full bg-[#C4E5FC] rounded-[32px] mt-5 px-[40px] py-[40px] flex flex-col lg:flex-row justify-between ">
          <div className="flex flex-col w-[100%] lg:w-[40%] justify-end space-y-5 ">
            <button className="bg-[#EE6352] w-fit px-[8px] py-[4px] rounded-[12px] font-medium text-[14px] text-[#F0EBE1] ">
              EXPLORE
            </button>
            <h1 className="font-bold text-[26px] w-[100%] lg:w-[70%] md:text-[30px] lg:text-[34px] xl:text-[40px] text-[#262522] uppercase">
              Our diverse Palette
            </h1>
            <p className="font-light text-[14px] md:text-[15px]  xl:text-[16px] lg:text-[16px] text-[#262522]/80">
              If you are a breakfast enthusiast, a connoisseur of savory
              delights, or on the lookout for irresistible desserts, our curated
              selection has something to satisfy every palate.
            </p>
          </div>
          <div className="flex flex-col w-[100%] mt-20 lg:mt-0 lg:w-[50%] space-y-4 ">
            <div className="flex items-center justify-between border-b-2 border-[#262522]/16 pb-4">
              <Image
                src="/images/breakfast.png"
                alt="icon"
                width={50}
                height={50}
                className="w-fit h-fit object-contain"
              />
              <p className="font-semibold text-[#262522] text-[16px] md:text-[17px]  xl:text-[18px] lg:text-[18px]  ">
                BREAKFAST
              </p>
            </div>
            <div className="flex items-center justify-between border-b-2 border-[#262522]/16 pb-4">
              <Image
                src="/images/lunch.png"
                alt="icon"
                width={50}
                height={50}
                className="w-fit h-fit object-contain"
              />
              <p className="font-semibold text-[#262522] text-[16px] md:text-[17px]  xl:text-[18px] lg:text-[18px]  ">
                LUNCH
              </p>
            </div>
            <div className="flex items-center justify-between border-b-2 border-[#262522]/16 pb-4">
              <Image
                src="/images/dinner.png"
                alt="icon"
                width={50}
                height={50}
                className="w-fit h-fit object-contain"
              />
              <p className="font-semibold text-[#262522] text-[16px] md:text-[17px]  xl:text-[18px] lg:text-[18px]  ">
                DINNER
              </p>
            </div>
            <div className="flex items-center justify-between border-b-2 border-[#262522]/16 pb-4">
              <Image
                src="/images/dessert.png"
                alt="icon"
                width={50}
                height={50}
                className="w-fit h-fit object-contain"
              />
              <p className="font-semibold text-[#262522] text-[16px] md:text-[17px]  xl:text-[18px] lg:text-[18px]  ">
                DESSERTS
              </p>
            </div>
            <div className="flex items-center justify-between border-b-2 border-[#262522]/16 pb-4">
              <Image
                src="/images/bite.png"
                alt="icon"
                width={50}
                height={50}
                className="w-fit h-fit object-contain"
              />
              <p className="font-semibold text-[#262522] text-[16px] md:text-[17px]  xl:text-[18px] lg:text-[18px]  ">
                QUICK BITE!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
