import Image from "next/image";
import React from "react";

const Nourishing = () => {
  return (
    <div className="w-full bg-[#F0EBE1] pb-20">
      <div className="w-[90%] mx-auto">
        <div className=" rounded-[32px] px-[16px] pt-[64px] pb-[40px]  bg-[#C4E5FC]">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h1 className="font-bold text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] text-[#262522] ">
              NOURISHING EVERY PALATE
            </h1>
          </div>
          <div className="grid grid-cols-1 mt-5 lg:grid-cols-3 gap-3">
            <div className="relative   ">
              <div className="absolute w-full h-full top-0 left-0 bg-linear-180 from-transparent to-[#262522] rounded-[32px] "></div>
              <Image
                src="/images/recipe13.jpg"
                alt="image"
                width={100}
                height={100}
                className="w-full h-[360px] lg:h-[464px] object-cover rounded-[24px] "
              />
              <div className="absolute flex flex-col space-y-4 bottom-0 px-5 lg:px-10 py-10 z-100">
                <h3 className="font-bold text-[21px] md:text-[22px] lg:-[24px] text-[#F0EBE1] ">
                  Gluten-Free Alternatives
                </h3>
                <p className="font-light text-[14px] md:text-[15px] lg:-[16px] text-[#F0EBE1] ">
                  Explore the world of gluten-free flours and grains, ensuring
                  your dishes cater to a diverse range of dietary preferences.
                </p>
                <p className="font-medium text-[12px] text-[#f0ebe1]">
                  15 min - 01 JUN 23{" "}
                </p>
              </div>
            </div>
            <div className="relative   ">
              <div className="absolute w-full h-full top-0 left-0 bg-linear-180 from-transparent to-[#262522] rounded-[32px] "></div>
              <Image
                src="/images/recipe14.jpg"
                alt="image"
                width={100}
                height={100}
                className="w-full h-[360px] lg:h-[464px] object-cover rounded-[24px] "
              />
              <div className="absolute flex flex-col space-y-4 bottom-0 px-5 lg:px-10 py-10 z-100">
                <h3 className="font-bold text-[21px] md:text-[22px] lg:-[24px] text-[#F0EBE1] ">
                  Plant-Based Cooking
                </h3>
                <p className="font-light text-[14px] md:text-[15px] lg:-[16px] text-[#F0EBE1] ">
                  Delight in the realm of plant-based cooking with tips for
                  crafting delicious vegetarian and vegan dishes.
                </p>
                <p className="font-medium text-[12px] text-[#f0ebe1]">
                  15 min - 01 JUN 23{" "}
                </p>
              </div>
            </div>
            <div className="relative   ">
              <div className="absolute w-full h-full top-0 left-0 bg-linear-180 from-transparent to-[#262522] rounded-[32px] "></div>
              <Image
                src="/images/recipe15.jpg"
                alt="image"
                width={100}
                height={100}
                className="w-full h-[360px] lg:h-[464px] object-cover rounded-[24px] "
              />
              <div className="absolute flex flex-col space-y-4 bottom-0 px-5 lg:px-10 py-10 z-100">
                <h3 className="font-bold text-[21px] md:text-[22px] lg:-[24px] text-[#F0EBE1] ">
                  Allergy-Friendly Substitutions
                </h3>
                <p className="font-light text-[14px] md:text-[15px] lg:-[16px] text-[#F0EBE1] ">
                  Discover options for common allergens, ensuring everyone can
                  savor the flavors of your culinary creations.
                </p>
                <p className="font-medium text-[12px] text-[#f0ebe1]">
                  15 min - 01 JUN 23{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nourishing;
