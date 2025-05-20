"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import "swiper/css";
import { recipe } from "@/types/types";

const Featured = () => {
  const [meals, setMeals] = useState<recipe[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getData() {
      const apiKey = "e1ed5835f345409480356553738a99df";
      const respone = await fetch(
        `https://api.spoonacular.com/recipes/random?number=6&tags=main+course&apiKey=${apiKey}`
      );
      const data = await respone.json();
      setMeals(data.recipes);

      console.log(data.recipes);
    }
    getData();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-[#F0EBE1] pb-20">
      <div className="w-[90%] mx-auto">
        <div className="border-2 rounded-[32px] px-[16px] pt-[40px] pb-[16px] border-[#262522]/24 bg-[#F0EBE1]">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h1 className="font-bold text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] text-[#262522] ">
              NEWEST RECIPES
            </h1>
            <div className="flex space-x-1 items-center">
              <button
                onClick={scrollLeft}
                className="border border-[#262522] p-1 rounded-full hover:border-[#262522]/24  "
              >
                <MdNavigateBefore className="size-6 text-[#262522] hover:text-[#262522]/24" />
              </button>
              <button
                onClick={scrollRight}
                className="border border-[#262522] p-1 rounded-full hover:border-[#262522]/24  "
              >
                <MdNavigateNext className="size-6 text-[#262522] hover:text-[#262522]/24" />
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="grid grid-cols-6  gap-[25rem] lg:gap-[45rem] overflow-x-auto  w-full   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden  py-4"
            id="container"
          >
            {meals.map((meal) => {
              return (
                <div
                  key={meal.id}
                  className=" flex-shrink-0 flex flex-col shadow-xl border-[#262522]/20  border rounded-[14px]   w-[350px] lg:w-[670px]"
                >
                  <Image
                    src={meal.image}
                    alt={meal.title}
                    width={600}
                    height={200}
                    className="w-full h-[200px] object-contain  rounded-[14px]"
                  />

                  <div className="bg-white flex flex-col rounded-b-[14px] pt-[24px] px-[24px] pb-[16px] space-y-3">
                    <h1 className="font-bold text-[21px] md:text-[22px] lg:text-[24px] xl:text-[24px] text-[#262522] ">
                      {meal.title}
                    </h1>
                    {meal.diets.length > 0 ? (
                      <ul className="flex flex-col lg:flex-row space-x-8 ml-4 list-disc ">
                        {meal.diets.map((diet, index) => (
                          <li
                            className="font-light text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#262522]"
                            key={index}
                          >
                            {diet}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p> No diets listed</p>
                    )}
                    <div className="flex flex-col lg:flex-row space-y-3 items-start lg:items-center justify-between lg:mt-10 mt-6">
                      <p className=" font-medium text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] text-[#262522]">
                        {meal.readyInMinutes} mins . {meal.servings} servings
                      </p>
                      <Link
                        href={`/recipes/${meal.id}`}
                        key={meal.id}
                        rel="noopener noreferrer"
                        className="border px-[24px] py-[12px] rounded-[24px] border-[#262522] font-medium text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] text-[#262522] "
                      >
                        VIEW RECIPE
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
