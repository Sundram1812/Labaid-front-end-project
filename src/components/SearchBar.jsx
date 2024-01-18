import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="w-[50%] mx-auto my-5 mb-12 z-0">
      <p className=" text-[2rem] text-black font-bold space-x-2 text-center my-6 py-3">
        FIND A <span className=" text-[#eb2026]">TEST</span>
      </p>

      <form action="" className=" relative flex flex-col gap-4">
        <input type="text" placeholder="Search for Test or Packages " 
            className=" py-3 px-3 outline-none border border-[#212121] rounded-sm placeholder-[#212121]"
        />

        <button className="bg-[#eb2026] py-2 text-white font-bold text-[1.2rem] rounded-sm">
          NEED HELP? Request a Call Back from our Experts
        </button>

        <FaSearch className=" absolute right-3 top-4 text-[1.2em] cursor-pointer" />
      </form>
    </div>
  );
}

export default SearchBar;
