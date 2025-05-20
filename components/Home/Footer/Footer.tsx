import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#F0EBE1] pb-10">
      <div className="w-[90%] mx-auto">
        <div className="px-[40px] py-[24px] hidden lg:block rounded-[32px] bg-[#262522] ">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logoss.png"
                alt="logo"
                width={200}
                height={200}
                className="w-[40px] h-[35px] object-cover"
              />
              <div className="flex flex-col ">
                <p className="text-[14px] text-[#F0EBE1] font-normal ">Cooks</p>
                <p className="text-[14px] text-[#F0EBE1] font-normal ">
                  Delight
                </p>
              </div>
            </div>
            <div className="flex space-x-3 items-center">
              <Link
                href="/"
                className="font-medium text-[14px] text-[#F0EBE1]  "
              >
                HOME <span className="text-[#F0EBE1]/8 ml-2">|</span>
              </Link>
              <Link
                href="/SearchPage"
                className="font-medium text-[14px] text-[#F0EBE1]   "
              >
                RECIPE <span className="text-[#F0EBE1]/8 ml-2">|</span>
              </Link>
              <Link
                href="/CookingTips"
                className="font-medium text-[14px] text-[#F0EBE1]  "
              >
                COOKING TIPS <span className="text-[#F0EBE1]/8 ml-2">|</span>
              </Link>
              <Link
                href="/AboutUs"
                className="font-medium text-[14px] text-[#F0EBE1]   "
              >
                ABOUT US
              </Link>
            </div>
            <div className="flex items-center space-x-5">
              <FaTiktok className="size-6 text-[#F0EBE1]" />
              <FaFacebook className="size-6 text-[#F0EBE1]" />
              <FaInstagram className="size-6 text-[#F0EBE1]" />
              <FaYoutube className="size-6 text-[#F0EBE1]" />
            </div>
          </div>
          <div className="border-t border-[#F0EBE1]/8 my-5"></div>
          <div className="flex items-center justify-center space-x-2">
            <p className="font-medium text-[12px] text-[#F0EBE1]/60">
              COPYRIGHT: &copy; 2024 COOKS DELIGHT.
            </p>
          </div>
        </div>
        <div className="lg:hidden p-[24px] rounded-[24px] bg-[#262522] ">
          <div className="flex flex-col space-y-8 ">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src="/images/logoss.png"
                alt="logo"
                width={300}
                height={300}
                className="w-[40px] h-[35px] object-cover"
              />
              <div className="flex flex-col ">
                <p className="text-[14px] text-[#F0EBE1] font-normal ">Cooks</p>
                <p className="text-[14px] text-[#F0EBE1] font-normal ">
                  Delight
                </p>
              </div>
            </div>
            <div className="  flex flex-col space-y-5">
              <Link
                href="/"
                className="font-medium text-[14px] text-[#F0EBE1]  "
              >
                HOME
              </Link>
              <div className="border-t border-[#F0EBE1]/24 "></div>
              <Link
                href="/SearchPage"
                className="font-medium text-[14px] text-[#F0EBE1]   "
              >
                RECIPE
              </Link>
              <div className="border-t border-[#F0EBE1]/24 "></div>
              <Link
                href="/CookingTips"
                className="font-medium text-[14px] text-[#F0EBE1]  "
              >
                COOKING TIPS
              </Link>
              <div className="border-t border-[#F0EBE1]/24 "></div>
              <Link
                href="/AboutUs"
                className="font-medium text-[14px] text-[#F0EBE1]   "
              >
                ABOUT US
              </Link>
            </div>
            <div className="flex items-center justify-center mt-5 space-x-5">
              <FaTiktok className="size-6 text-[#F0EBE1]" />
              <FaFacebook className="size-6 text-[#F0EBE1]" />
              <FaInstagram className="size-6 text-[#F0EBE1]" />
              <FaYoutube className="size-6 text-[#F0EBE1]" />
            </div>
            <div className="border-t border-[#F0EBE1]/24 "></div>
            <div className="flex items-center justify-center space-x-2">
              <p className="font-medium text-[12px] text-[#F0EBE1]/60">
                COPYRIGHT: &copy; 2024 COOKS DELIGHT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
