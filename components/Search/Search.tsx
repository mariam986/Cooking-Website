"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";

const Search = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [result, setResult] = useState<{ id: number; title: string }[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setResult([]);
        return;
      }
      setLoading(true);

      const apiKey = "e1ed5835f345409480356553738a99df";
      const res = await fetch(
        `https://api.spoonacular.com/recipes/autocomplete?number=4&query=${query}&apiKey=${apiKey}`
      );
      const data = await res.json();
      setResult(data);
      setLoading(false);
    };

    const timeout = setTimeout(fetchData, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="w-full bg-[#F0EBE1] pt-40 h-[100vh]">
      <div className="w-[90%] h-full mx-auto">
        <form action="submit">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowDropDown(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            onBlur={() => setTimeout(() => setShowDropDown(false), 300)}
            placeholder="Search Recipes......."
            className="px-[24px] py-[12px] rounded-[24px] border w-full border-[#262522]/24 text-[#262522]/80 placeholder:text-[#262522]/24  "
          />
        </form>

        {loading ? (
          <div className=" mt-40 flex flex-col justify-center items-center  ">
            <div className="relative w-20 h-20 lg:w-40 lg:h-40 ">
              <div className="w-full h-full border-4 border-transparent rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-[#F29C33] rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <div>
            {showDropDown && result.length > 0 && (
              <ul className="absolute z-10 bg-transparent border mt-5 w-[90%]  rounded-[12px] shadow">
                {result.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/recipes/${item.id}`}
                      onClick={() => {
                        setQuery(item.title);
                        setShowDropDown(false);
                      }}
                      className="block px-4 py-2 hover:bg-[#F29C33] hover:text-white cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
