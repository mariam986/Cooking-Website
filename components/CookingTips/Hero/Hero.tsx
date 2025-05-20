import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-[#F0EBE1] pt-40 pb-10 ">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row  justify-between items-center">
          <div className="flex w-[100%] lg:w-[55%] ">
            <h1 className="font-extrabold text-[38px] md:text-[42px] lg:text-[60px] xl:text-[80px] text-[#262522] uppercase">
              Our Essential Cooking Tips
            </h1>
          </div>
          <div className="w-[100%] lg:w-[43%]  space-y-10 flex flex-col">
            <p className="font-normal text-[18px]   md:text-[19px] lg:text-[20px] xl:text-[21px] text-[#262522]/60">
              Welcome to Cooks Delight&apos;s treasure trove of cooking wisdom!
              Whether you&apos;re a seasoned chef or just starting your culinary
              journey, our cooking tips are designed to elevate your skills,
              enhance your kitchen experience, and bring joy to your cooking
              adventures.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row  mt-10 space-x-20 space-y-6   px-[24px] py-[40px] xl:p-[40px] rounded-[24px] border border-[#262522]/24 ">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/knife.png"
              alt="image"
              width={50}
              height={50}
              className="w-[64px] h-[64px] object-contain"
            />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] text-[#EE6352] ">
                QUALITY TOOLS
              </h1>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] text-[#262522] ">
                Invest in high-quality knives, cutting boards, and cookware.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/images/utensils.png"
              alt="image"
              width={50}
              height={50}
              className="w-[64px] h-[64px] object-contain"
            />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold text-[14px] md:text-[17px] lg:text-[18px] text-[#EE6352] ">
                ESSENTIALS UTENSILS
              </h1>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] text-[#262522] ">
                Have a variety of utensils, including spatulas, tongs, and
                ladles.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/images/scale.png"
              alt="image"
              width={50}
              height={50}
              className="w-[64px] h-[64px] object-contain"
            />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] text-[#EE6352] ">
                MEASURING ACCURACY
              </h1>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] text-[#262522] ">
                Use measuring cups and spoons for precise ingredient quantities.
              </p>
            </div>
          </div>
          <div className="hidden items-center space-x-4">
            <Image
              src="/images/scale.png"
              alt="image"
              width={50}
              height={50}
              className="w-[64px] h-[64px] object-contain"
            />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] text-[#EE6352] ">
                MEASURING ACCURACY
              </h1>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] text-[#262522] ">
                Use measuring cups and spoons for precise ingredient quantities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
