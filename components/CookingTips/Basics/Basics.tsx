import Image from "next/image";
import React from "react";

const Basics = () => {
  return (
    <div className="w-full bg-[#F0EBE1] pb-20">
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] text-[#262522] ">
          MASTERING THE BASICS
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="flex flex-col ">
            <Image
              src="/images/recipe1.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                KNIFE SKILLS
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Unlock the art of precision in your kitchen with proper
                chopping, dicing, and slicing techniques. Elevate your culinary
                creations to new heights.
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                15 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe2.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Sauteing and Searing
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Achieve the perfect sear and elevate flavors in your dishes.
                Learn the secrets to sautéing like a pro and creating
                irresistible textures.
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                20 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe3.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Roasting Tips
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Ensure even cooking and unlock flavorful results with our expert
                roasting tips. From golden vegetables to succulent meats, master
                the art .
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                25 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe4.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Prep Workstations:
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Efficiently organize your kitchen space for chopping, mixing,
                and cooking. Elevate your efficiency in the heart of your
                culinary domain.
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                15 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe5.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Cleaning As You Go
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Maintain a tidy kitchen for stress-free cooking. Learn the art
                of cleaning as you go, turning every culinary endeavor into a
                seamless experience.
              </p>
              <p className="font-medium mt-5 text-[12px] text-[#262522]">
                20 min - 01 JUN 23{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/images/recipe6.png"
              alt="images"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <div className="px-[24px] pt-[24px] pb-[16px] bg-[#FFFBF2] rounded-b-[24px] flex flex-col space-y-4 ">
              <h2 className="font-bold text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px] text-[#262522]">
                Recipe Modifications
              </h2>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]">
                Feel confident modifying recipes to suit your taste. Explore the
                art of culinary creativity in crafting dishes uniquely your own.
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
