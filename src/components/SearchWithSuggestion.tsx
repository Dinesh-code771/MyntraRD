import React, { useEffect, useState } from "react";
import { IoIosClose, IoIosSearch } from "react-icons/io";

function fetchSuggestions(searchValue: string) {
  return fetch(`https://dummyjson.com/products/search?q=${searchValue}`).then(
    (res) => res.json()
  );
}
export default function SearchWithSuggestion() {
  const [searchValue, setSearchValue] = useState("");

  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    async function fetchData() {
      const suggestions = await fetchSuggestions(searchValue);
      console.log(suggestions);
      setSuggestions(suggestions.products);
    }
    timeout = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchValue]);
  return (
    <div className="flex flex-col relative gap-2 border w-[400px]  border-gray-500 px-1 rounded-md ">
      <div className="flex  items-center gap-2">
        <IoIosSearch />
        <input
          type="text"
          className="w-full bg-transparent px-3 py-1
            focus:outline-none"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for products, categories..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <IoIosClose
          size={30}
          onClick={() => setSearchValue("")}
          className="cursor-pointer"
        />
      </div>
      {searchValue.length > 0 && isFocused && (
        <div className="flex absolute top-10 p-5 w-full border rounded-md shadow-md bg-white left-0 flex-col gap-2 max-h-[200px] overflow-y-auto">
          {suggestions.length > 0 &&
            suggestions.map((suggestion) => (
              <div
                onClick={() => setSearchValue(suggestion.title)}
                className="text-sm hover:bg-gray-100 p-2 cursor-pointer"
                key={suggestion.id}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
