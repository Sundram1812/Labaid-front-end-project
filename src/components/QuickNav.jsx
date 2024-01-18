import React from "react";
import { IoCallOutline, IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

function QuickNav() {
  return (
    <div className="bg-black">
      <div className=" mx-auto flex text-white bg-black  justify-between items-center py-3 w-10/12">
        {/* LEFT PART */}
        <div className=" flex gap-2  items-center ">
          <p className=" text-[.9rem] font-bold">QUICK LINKS</p>
          <p className="text-[.9rem] font-bold ">|</p>
          <div className="flex gap-1 items-center">
            <span className=" font-bold text-[1.1em]">
              <IoCallOutline />
            </span>
            <span className=" text-[.9rem] font-bold">055-66181000</span>
          </div>
        </div>

        {/* RIGHT PART  */}
        <div className=" flex gap-2 items-center">
          <div className="flex items-center gap-1">
            <span>
              <FaRegUser />
            </span>
            <span className=" text-[.9rem] font-bold">Login</span>
          </div>
          <span className=" text-[.9rem] font-bold ml-1">|</span>
          <div className=" flex items-center">
            <div className=" flex items-center gap-1">
              <span>
                <IoCartOutline />
              </span>
              <span className=" text-[.9rem] font-bold">Cart(0)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickNav;
