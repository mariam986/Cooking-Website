import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full bg-[#F0EBE1] pt-40 pb-10 ">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row  justify-between items-center">
          <div className="flex w-[100%] lg:w-[50%] ">
            <h1 className="font-extrabold text-[38px] md:text-[42px] lg:text-[60px] xl:text-[80px] text-[#262522] uppercase">
              Welcome to my Culinary Haven!
            </h1>
          </div>
          <div className="w-[100%] lg:w-[48%] space-y-10 flex flex-col">
            <p className="font-normal text-[18px] md:text-[19px] lg:text-[20px] xl:text-[21px] text-[#262522]/60">
              Bonjour and welcome to the heart of my kitchen! I&apos;m Isabella
              Russo, the culinary enthusiast behind this haven of flavors, Cooks
              Delight. Join me on a gastronomic journey where each dish carries
              a story, and every recipe is a crafted symphony of taste.
            </p>
            <button className="px-[24px] py-[12px] rounded-[24px] bg-[#F29C33] font-medium text-[14px] w-fit text-[#262522]  ">
              EXPLORE RECIPES
            </button>
          </div>
        </div>
        <div className="p-[16px] rounded-[32px] border border-[#262522]/24  mt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex w-[100%] lg:w-[50%] flex-col space-y-4">
              <Image
                src="/images/Author.png"
                alt="image"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="px-[24px] py-[12px] rounded-[24px] flex items-center justify-between border border-[#262522]  ">
                <p className="font-medium text-[12px] text-[#262522] ">
                  FOLLOW ME
                </p>
                <div className="flex space-x-6">
                  <FaFacebook className="size-6 text-[#262522]" />
                  <FaInstagram className="size-6 text-[#262522]" />
                  <FaYoutube className="size-6 text-[#262522]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[100%] lg:w-[45%] space-y-3">
              <h1 className="font-bold text-[26px] md:text-[28px] lg:text-[32px] xl:text-[40px] text-[#333333]">
                From Italian Roots to Global Palates
              </h1>
              <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#333333]/80">
                Born and raised in the vibrant culinary landscape of Italy, my
                journey with food began in the heart of my family&apos;s
                kitchen. Surrounded by the aroma of fresh herbs, the sizzle of
                pans, and the laughter of loved ones, I developed a deep
                appreciation for the art of cooking. My culinary education took
                me from the historic streets of Rome to the bustling markets of
                Florence, where I honed my skills and cultivated a love for the
                simplicity and authenticity of Italian cuisine.
              </p>
              <p className="font-light mt-2 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#333333]/80">
                Driven by a relentless curiosity, I embarked on a global
                culinary exploration, seeking inspiration from the rich tapestry
                of flavors found in kitchens around the world. From the spicy
                markets of Marrakech to the sushi stalls of Tokyo, each
                experience added a unique brushstroke to my culinary canvas.
              </p>
              <p className="font-light mt-2 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#333333]/80">
                Whether you&apos;re a seasoned home cook or just starting your
                culinary adventure, I&apos;m delighted to have you here.
                Let&apos;s stir, simmer, and savor the beauty of creating
                something wonderful together.
              </p>
              <p className="font-light mt-2 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#333333]/80">
                Warmest regards,
              </p>
              <p className="font-normal mt-2 text-[16px]  md:text-[17px] lg:text-[18px] xl:text-[21px] text-[#333333]/80">
                Isabella Russo
              </p>
            </div>
          </div>
          <div className="grid mt-10 grid-cols-1 lg:grid-cols-4 gap-6">
            <Image
              src="/images/Image01.png"
              alt="image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <Image
              src="/images/Image02.png"
              alt="image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <Image
              src="/images/Image03.png"
              alt="image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <Image
              src="/images/Image04.png"
              alt="image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <Image
              src="/images/Image05.png"
              alt="image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <Image
              src="/images/Image06.png"
              alt="image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <Image
              src="/images/Image07.png"
              alt="image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
            <Image
              src="/images/Image08.png"
              alt="image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
