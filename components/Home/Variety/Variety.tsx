"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { recipe } from "@/types/types";

const categories = [
  { label: "All", tag: "" },
  { label: "Vegan", tag: "vegan" },
  { label: "Breakfast", tag: "breakfast" },
  { label: "Lunch", tag: "lunch" },
  { label: "Dessert", tag: "dessert" },
  { label: "Dinner", tag: "dinner" },
  { label: "Quick Bite", tag: "snack" }, // snack is valid, "Quick bite!" is not
];

const Variety = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<recipe[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const apiKey = "e1ed5835f345409480356553738a99df";
      const tag = selectedCategory.tag;
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=4&tags=${tag}&apiKey=${apiKey}`
      );

      const data = await response.json();
      setRecipes(data.recipes);
      setLoading(false);
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div className="w-full bg-[#F0EBE1] pb-20">
      <div className="w-[90%] mx-auto ">
        <div className="flex flex-col items-center text-center justify-center space-y-4">
          <button className="px-[16px] py-[8px] rounded-[16px] bg-[#EE6352] font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] text-[#fffbf2] ">
            RECIPE
          </button>
          <h1 className="font-bold text-[26px] md:text-[28px] lg:text-[30px] xl:text-[40px] text-[#262522]">
            EMBARK ON A JOURNEY
          </h1>
          <p className="font-light text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-[#262522]/80">
            {" "}
            With our diverse collection of recipes we have something to satisfy
            every palate.
          </p>
        </div>
        <div className="flex w-full mt-10 overflow-x-auto space-x-6">
          {categories.map((cat) => (
            <h1
              key={cat.label}
              onClick={() => setSelectedCategory(cat)}
              className={`border px-[24px] py-[12px] flex items-center justify-center rounded-[24px] cursor-pointer w-full hover:text-[#262522] hover:border-[#262522] ${
                selectedCategory.label === cat.label
                  ? "text-[#262522] bg-[#9FDC26]"
                  : "text-[#262522]/40 border border-[#262522]/40"
              }`}
            >
              {cat.label.toUpperCase()}
            </h1>
          ))}
        </div>
        {loading ? (
          <p className="text-[24px] text-[#262522] mt-10 flex items-center justify-center">
            Loading.....
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="  flex flex-col shadow-xl border-[#262522]/20  border rounded-[14px] "
              >
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={600}
                  height={200}
                  className="w-full h-[200px] object-cover  rounded-t-[14px]"
                />

                <div className="bg-white flex flex-col w-full rounded-b-[14px] pt-[24px] px-[24px] pb-[16px] h-full space-y-3">
                  <h1 className="font-bold text-[21px] md:text-[22px] lg:text-[24px] xl:text-[24px] text-[#262522] ">
                    {recipe.title}
                  </h1>
                  {recipe.diets.length > 0 ? (
                    <ul className="flex flex-col lg:flex-row space-x-8 ml-4 list-disc ">
                      {recipe.diets.map((diet, index) => (
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
                      {recipe.readyInMinutes} mins . {recipe.servings} servings
                    </p>
                    <Link
                      href={`/recipes/${recipe.id}`}
                      key={recipe.id}
                      rel="noopener noreferrer"
                      className="border px-[24px] py-[12px] rounded-[24px] border-[#262522] font-medium text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] text-[#262522] "
                    >
                      VIEW RECIPE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Variety;
