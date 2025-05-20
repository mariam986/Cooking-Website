import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

type props = {
  showNav: () => void;
};

const Nav = ({ showNav }: props) => {
  return (
    <div className="w-full bg-[#F0EBE1] z-[1000]  fixed pt-[20] pb-[20] ">
      <div className="w-[90%]  mx-auto">
        <div className="border-2 rounded-[32px] border-[#262522]/24 py-[16px] px-[24px] ">
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

              <div className="flex flex-col space-y-0 font-bold text-[15px] text-[#262522] ">
                <p>Cooks</p>
                <p>Delight</p>
              </div>
            </div>
            <div className="lg:flex hidden space-x-6 items-center">
              <Link
                href="/"
                className="font-medium text-[14px] text-[#262522]/24 hover:text-[#262522] w-fit relative after:content-[''] after:h-[3px] 
                after:scale-0 after:block after:w-full after:bg-[#EE6352] after:absolute hover:after:scale-100 after:transform after:transition-all after:duration-300
                after:origin-right "
              >
                HOME
              </Link>
              <Link
                href="/SearchPage"
                className="font-medium text-[14px] text-[#262522]/24 hover:text-[#262522] w-fit relative after:content-[''] after:h-[3px] 
                after:scale-0 after:block after:w-full after:bg-[#EE6352] after:absolute hover:after:scale-100 after:transform after:transition-all after:duration-300
                after:origin-right "
              >
                RECIPE
              </Link>
              <Link
                href="/CookingTips"
                className="font-medium text-[14px] text-[#262522]/24 hover:text-[#262522] w-fit relative after:content-[''] after:h-[3px] 
                after:scale-0 after:block after:w-full after:bg-[#EE6352] after:absolute hover:after:scale-100 after:transform after:transition-all after:duration-300
                after:origin-right "
              >
                COOKING TIPS
              </Link>
              <Link
                href="/AboutUs"
                className="font-medium text-[14px] text-[#262522]/24 hover:text-[#262522] w-fit relative after:content-[''] after:h-[3px] 
                after:scale-0 after:block after:w-full after:bg-[#EE6352] after:absolute hover:after:scale-100 after:transform after:transition-all after:duration-300
                after:origin-right "
              >
                ABOUT US
              </Link>
            </div>
            <div className="lg:flex hidden space-x-5 items-center ">
              <Link
                href="/SearchPage"
                className=" w-[37px] h-[37px] p-[8px] bg-[#262522]/8 rounded-full"
              >
                <CiSearch className="size-5 text-[#262522]  " />
              </Link>
              <button className="px-[24px] py-[12px] font-medium text-[14px] rounded-[24px] bg-[#262522] text-[#F0EBE1] ">
                SUBSCRIBE
              </button>
            </div>
            <div
              onClick={showNav}
              className="flex lg:hidden  w-[37px] h-[37px] items-center p-[8px] bg-[#262522]/16 rounded-full "
            >
              <GiHamburgerMenu className="size-8 text-[#262522]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
