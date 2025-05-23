"use client";
import React, { useEffect, useState } from "react";
import { recipe } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<recipe[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");

    const ids: string[] = stored ? JSON.parse(stored) : [];
    setFavorites(ids);

    const fetchRecipe = async () => {
      const apiKey = "e1ed5835f345409480356553738a99df";
      const data = await Promise.all(
        ids.map(async (id) => {
          const res = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
          );
          return res.ok ? await res.json() : null;
        })
      );
      setRecipe(data.filter(Boolean));
    };

    if (ids.length > 0) {
      fetchRecipe();
    }
  }, []);

  const removeFavorites = (id: string) => {
    const updated = favorites.filter((favid) => favid !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setRecipe((prev) => prev.filter((recipe) => recipe.id.toString() !== id));
  };

  if (recipe.length === 0) {
    return (
      <div className="w-full bg-[#F0EBE1] pt-60 pb-20 text-center font-bold text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] text-[#262522]">
        No favorites yet.
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F0EBE1] pt-30 pb-20">
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] text-[#262522] ">
          YOUR FAVORITE RECIPES
        </h1>

        <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4">
          {recipe.map((recipe) => (
            <div
              key={recipe.id}
              className="  flex flex-col shadow-xl border-[#262522]/20  border rounded-[14px]"
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={600}
                height={200}
                className="w-full h-[300px] object-cover  rounded-t-[14px]"
              />

              <div className="bg-white flex h-full flex-col rounded-b-[14px] pt-[24px] px-[24px] pb-[16px] space-y-3">
                <h1 className="font-bold text-[21px] md:text-[22px] lg:text-[24px] xl:text-[24px] text-[#262522] ">
                  {recipe.title}
                </h1>

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
                  <button
                    onClick={() => removeFavorites(recipe.id.toString())}
                    className=" px-[24px] py-[12px] bg-[#EE6352] text-white rounded-[24px] font-medium text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] mb-3"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
