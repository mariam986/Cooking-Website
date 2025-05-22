"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [result, setResult] = useState<{ id: number; title: string }[]>([]);
  const [query, setQuery] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setResult([]);
        return;
      }

      const apiKey = "e1ed5835f345409480356553738a99df";
      const res = await fetch(
        `https://api.spoonacular.com/recipes/autocomplete?number=4&query=${query}&apiKey=${apiKey}`
      );
      const data = await res.json();
      setResult(data);
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
                const selected = result[0];
                setQuery(selected.title);
                setShowDropDown(false);

                router.push(`/recipes/${selected.id}`);
              }
            }}
            onBlur={() => setTimeout(() => setShowDropDown(false), 300)}
            placeholder="Search Recipes......."
            className="px-[24px] py-[12px] rounded-[24px] border w-full border-[#262522]/24 text-[#262522]/80 placeholder:text-[#262522]/24  "
          />
        </form>

        {showDropDown && result.length > 0 && (
          <ul className="absolute z-10 bg-transparent border mt-5 w-[90%]  rounded-[12px] shadow">
            {result.map((item) => (
              <li
                className="block px-4 py-2 hover:bg-[#F29C33] hover:text-[#ffff] cursor-pointer"
                onMouseDown={() => {
                  setQuery(item.title), setShowDropDown(false);
                  router.push(`/recipes/${item.id}`);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
