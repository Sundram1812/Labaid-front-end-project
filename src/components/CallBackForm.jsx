import React from "react";

function CallBackForm() {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-3 w-[80%] mx-auto px-8 rounded-md z-0">
      <h2 className=" text-center text-[#eb2026] text-[1.2rem] my-3 font-bold">BOOK A HOME VISIT NOW!</h2>
      <form action="" className="flex flex-col gap-6 mx-auto">
        <input
          type="text"
          placeholder="Full Name*"
          className=" outline-none border-[1.5px] border-[#515151] py-[6px] px-4 placeholder-[#414141] text-[1.1rem] rounded-md"
        />
        <input
          type="text"
          placeholder="Mobile Number*"
          className=" outline-none border-[1.5px] border-[#515151] py-[6px] px-4 placeholder-[#414141] text-[1.1rem] rounded-md"
        />
        <input
          type="email"
          placeholder="Email ID*"
          className=" outline-none border-[1.5px] border-[#515151] py-[6px] px-4 placeholder-[#414141] text-[1.1rem] rounded-md"
        />
        <input
          type="text"
          placeholder="Enter Test Name(optional)"
          className=" outline-none border-[1.5px] border-[#515151] py-[6px] px-4 placeholder-[#414141] text-[1.1rem] rounded-md"
        />
        <button
         className=" bg-[#eb2026] py-[8px] rounded-md text-white mb-4 text-[1.3rem]"
        >Get a call Back</button>
      </form>
    </div>
  );
}

export default CallBackForm;
