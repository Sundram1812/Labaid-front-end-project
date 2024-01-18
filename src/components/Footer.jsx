import React from "react";
import kamakhya_logo from "../assets/kamakhya_logo.jpg"

function Footer() {
  return (
    <div className="bg-[#313131] text-white">
      <div className="grid grid-rows-1 grid-cols-2  mx-auto justify-between items-baseline pt-6  px-10">
        {/* left part */}
        <div className=" text-[.8em]">
          <p className=" w-[60%]">
            Copyright @ 2023 Suraksha Diagnostic Private Limited. Developed by
            Maa Kamakkhaya Associates
          </p>
          <img src={kamakhya_logo} alt="" className="w-[100px] mix-blend-lighten" />
        </div>

        {/* Right part */}
        <div className=" grid grid-rows-1 grid-cols-4 text-[.8em] justify-between items-center">
          <div >
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Home</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Find a Test</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Find a Doctor</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Feedback</p>
          </div>
          <div>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Home</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Find a Test</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Find a Doctor</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Feedback</p>
          </div>
          <div>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Home</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Find a Test</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Find a Doctor</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Feedback</p>
          </div>
          <div>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Home</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Find a Test</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Find a Doctor</p>
            <p className=" hover:cursor-pointer hover:underline hover:text-red-400 transition-all duration-300 mt-1">Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;


