import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full  bg-[#F0EBE1] pb-10">
      <div className="w-[90%] mx-auto">
        <div className=" rounded-[32px]  items-center text-center   bg-[url('/images/top.svg'),_url(/images/top2.svg)] bg-[position:top_center,_bottom_center] bg-[#EE6352]  bg-no-repeat bg-cover ">
          <div className="flex flex-col w-[100%] px-[24px] lg:w-[70%] text-center items-center justify-center mx-auto py-[40px] md:py-[60px] space-y-4">
            <p className="font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] text-[#FFFBF2]/80">
              SUBSCRIBE
            </p>
            <h1 className="font-extrabold text-[38px] md:text-[42px] lg:text-[60px] xl:text-[80px] text-[#FFFBF2] uppercase">
              Join the fun Subscribe now!
            </h1>
            <p className="font-medium text-[16px] md:text-[18px] w-[100%] lg:w-[80%] lg:text-[20px] xl:text-[21px] text-[#FFFBF2]/80">
              Subscribe to our newsletter for a weekly serving of recipes,
              cooking tips, and exclusive insights straight to your inbox.
            </p>
            <div className=" mt-10 relative hidden lg:block">
              <input
                type="email"
                placeholder="Email Address"
                className="py-[12px] px-[24px] rounded-[24px] h-[50px] w-[450px] bg-[#FFFBF2] placeholder:text-[#262522]/40 placeholder:text-[21px] placeholder:font-normal "
              />
              <button className="absolute py-[12px] px-[24px] rounded-[24px] right-3 top-1.5 h-[38px] bg-[#262522] w-[130px] text-[#F0EBE1] font-medium text-[14px] ">
                SUBSCRIBE
              </button>
            </div>
            <div className=" mt-10  lg:hidden block">
              <input
                type="email"
                placeholder="Email Address"
                className="py-[12px] px-[24px] rounded-[24px] h-[50px] w-full bg-[#FFFBF2] placeholder:text-[#262522]/40 placeholder:text-[21px] placeholder:font-normal "
              />
              <button className=" mt-3 py-[12px] px-[24px] rounded-[24px]  h-[50px] w-full bg-[#262522]  text-[#F0EBE1] font-medium text-[14px] ">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
