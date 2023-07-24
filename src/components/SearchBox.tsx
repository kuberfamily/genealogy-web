"use client";

import { useRouter } from "next/navigation";
import { HiSearch } from "react-icons/hi";

const SearchBox = () => {
  const navigate = useRouter();
  console.log(Math.floor(Date.now() / 1000) + 60 * 60);
  const handleClick = () => {
    navigate.push("/search");
  };
  return (
    <label
      htmlFor="search"
      className="middle flex flex-[.5] justify-center items-center space-x-4 bg-[#E4E6EB] rounded-full px-4 py-2"
    >
      <HiSearch fontSize={"22px"} />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        className="bg-transparent flex flex-1 outline-none "
        onClick={handleClick}
      />
    </label>
  );
};

export default SearchBox;
