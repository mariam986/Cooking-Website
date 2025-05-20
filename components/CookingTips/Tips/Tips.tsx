import Image from "next/image";
import React from "react";

const Basics = () => {
  return (
    <div className="w-full bg-[#F0EBE1] pb-20">
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] text-[#262522] ">
          TIPS & TRICKS
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="flex flex-col ">
            <Image
              src="/images/recipe7.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Fresh vs. Dried Herbs
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Discover the nuanced world of herbs. Learn when to opt for the
                freshness of herbs and when dried variants can amplify your
                culinary creations.
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                15 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe8.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Choosing Produce
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Selecting ripe fruits and vegetables is an art. Explore our
                insights to ensure optimal taste in every dish.
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                20 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe9.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Understanding Spices
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Enhance flavors by navigating the vast array of spices and
                seasonings. Uncover the secrets of creating dynamic taste
                profiles.
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                25 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe10.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Balancing Sweet and Savory
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Achieve the perfect symphony of flavors by mastering the art of
                balancing sweet and savory elements in your dishes
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                15 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe11.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Too Salty? Too Sweet? Fixing Seasoning Issues
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Discover quick fixes for seasoning mishaps and ensure your
                dishes are perfectly balanced.
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                20 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe12.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Storage Solutions
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Keep ingredients fresh and accessible with our storage
                solutions. Transform your kitchen into an organized oasis.
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                25 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basics;
