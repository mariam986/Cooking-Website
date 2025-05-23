"use client";
import React, { useEffect, useState } from "react";

type Props = {
  recipeId: string;
};

const FavoriteButton = ({ recipeId }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(stored.includes(recipeId));
  }, [recipeId]);

  const toggleFavorite = () => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavorites;

    if (stored.includes(recipeId)) {
      updatedFavorites = stored.filter((id: string) => id !== recipeId);
    } else {
      updatedFavorites = [...stored, recipeId];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`mt-4 px-4 py-2 rounded-[24px] ${
        isFavorite ? "bg-[#EE6352] text-white" : "bg-gray-200 text-black"
      }`}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
