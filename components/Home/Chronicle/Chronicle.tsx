import Image from "next/image";
import React from "react";

const Chronicle = () => {
  return (
    <div className="w-full bg-[#F0EBE1] pb-20">
      <div className="w-[90%] mx-auto">
        <div className="border border-[#262522]/24 px-[16px] py-[16px] rounded-[32px] flex flex-col justify-between lg:flex-row  ">
          <div className="flex flex-col w-[100%] lg:w-[60%] space-y-5 ">
            <div className="flex  flex-col lg:flex-row items-center justify-between">
              <div className="flex flex-col w-[100%] lg:w-[50%] space-y-2">
                <button className="px-[16px] w-fit py-[8px] rounded-[16px] bg-[#EE6352] font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] text-[#fffbf2] ">
                  ABOUT US
                </button>
                <h1 className="font-bold text-[26px] md:text-[28px] lg:text-[30px] xl:text-[40px] text-[#262522]">
                  Our Culinary Chronicle
                </h1>
                <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]/80">
                  Our journey is crafted with dedication, creativity, and an
                  unrelenting commitment to delivering delightful culinary
                  experiences. Join us in savoring the essence of every dish and
                  the stories that unfold.
                </p>
              </div>
              <div className="w-[100%] mt-5 lg:mt-0 lg:w-[40%]">
                <Image
                  src="/images/Recipecard.png"
                  alt="image"
                  width={100}
                  height={100}
                  className="w-full lg:h-[326] h-[324px] object-cover rounded-[16px]"
                />
              </div>
            </div>
            <div>
              <Image
                src="/images/Recipecard2.png"
                alt="image"
                width={100}
                height={100}
                className="w-full lg:h-[320px] h-[324px] object-cover rounded-[16px]"
              />
            </div>
          </div>
          <div className="w-[100%] lg:w-[38%]">
            <Image
              src="/images/Recipecard3.png"
              alt="image"
              width={100}
              height={100}
              className="w-full h-[324px] mt-5 lg:mt-0 lg:h-[664px] object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chronicle;
