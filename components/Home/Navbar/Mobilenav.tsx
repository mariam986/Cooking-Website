import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaFacebook, FaHeart, FaInstagram, FaYoutube } from "react-icons/fa";

type props = {
  closeNav: () => void;
  isOpen: boolean;
};

const Mobilenav = ({ closeNav, isOpen }: props) => {
  const openNav = isOpen ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className="lg:hidden">
      <div
        className={`w-full ${openNav} transform transition-all duration-500 inset-0 bg-[#262522] h-screen z-[1006] py-10  px-5 fixed `}
      >
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <div className="w-[40px] h-[35px]">
              <Image
                src="/images/logos.png"
                alt="logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col space-y-0 font-bold text-[15px] text-[#F0EBE1] ">
              <p>Cooks</p>
              <p>Delight</p>
            </div>
          </div>
          <div className="w-[37px] h-[37px] items-center p-[8px] bg-[#FFFBF2]/16 rounded-full">
            <CgClose className="text-[#F29C33] size-6" onClick={closeNav} />
          </div>
        </div>
        <div className="flex flex-col space-y-6 mt-20 ">
          <Link
            href="/"
            onClick={closeNav}
            className="font-semibold text-[16px] text-[#F0EBE1]  border-b-2 border-[#FFFBF2]/16 pb-5 "
          >
            HOME
          </Link>
          <Link
            href="/SearchPage"
            onClick={closeNav}
            className="font-semibold text-[16px] text-[#F0EBE1]  border-b-2 border-[#FFFBF2]/16 pb-5 "
          >
            RECIPE
          </Link>
          <Link
            href="/CookingTips"
            onClick={closeNav}
            className="font-semibold text-[16px] text-[#F0EBE1]  border-b-2 border-[#FFFBF2]/16 pb-5 "
          >
            COOKING TIPS
          </Link>
          <Link
            href="/AboutUs"
            onClick={closeNav}
            className="font-semibold text-[16px] text-[#F0EBE1]  border-b-2 border-[#FFFBF2]/16 pb-5 "
          >
            ABOUT US
          </Link>
        </div>
        <div className="flex mt-20  space-x-2 items-center ">
          <Link
            href="/SearchPage"
            onClick={closeNav}
            className=" w-[40px] h-[40px] p-[8px] bg-[#FFFBF2]/16 rounded-full"
          >
            <CiSearch className="size-6 text-[#FFFF]  " />
          </Link>
          <button className="px-[24px] w-full py-[12px] font-medium text-[14px] rounded-[24px] bg-[#FFFBF2]/16 text-[#F0EBE1] ">
            SUBSCRIBE
          </button>
          <Link href="/Favorites" onClick={closeNav}>
            <FaHeart className="size-7 text-[#ffff]" />
          </Link>
        </div>
        <div className="flex space-x-6 mt-20 items-center justify-center">
          <FaFacebook className="size-8 text-[#ffff]" />
          <FaInstagram className="size-8 text-[#ffff]" />
          <FaYoutube className="size-8 text-[#ffff]" />
        </div>
      </div>
    </div>
  );
};

export default Mobilenav;
