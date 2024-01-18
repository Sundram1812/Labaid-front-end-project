import React from "react";
import deliveryBoy from "../assets/new-home-collection-icon-red.png";
import doctorIcon from "../assets/new-doctor-appointment-icon-red.png";
import testIcon from "../assets/new-find-test-icon-red.png";
import reportIcon from "../assets/new-download-report-icon-red.png";
import locationIcon from "../assets/new-nearest-center-icon-red.png";

function AllOptions() {
  return (
    <div className=" flex w-10/12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[200px] rounded-md mx-auto py-4 mt-3 mb-6 justify-evenly  items-center z-0">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className=" hover:-translate-y-3 transition-all duration-300 cursor-pointer flex  justify-center items-center border-[3px] border-[#eb2026] rounded-full h-[100px] w-[100px]">
          <img src={deliveryBoy} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center font-semibold">
          <p>BOOK A</p>
          <p>HOME COLLECTION</p>
        </div>
      </div>
      <div className=" w-[2.5px] h-[150px] bg-[#eb2026]"></div>

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="hover:-translate-y-3 transition-all duration-300 cursor-pointer flex  justify-center items-center border-[3px] border-[#eb2026] rounded-full h-[100px] w-[100px]">
          <img src={doctorIcon} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center font-semibold">
          <p>BOOK AN</p>
          <p>APPOINTMENT</p>
        </div>
      </div>
      <div className=" w-[2.5px] h-[150px] bg-[#eb2026]"></div>

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="hover:-translate-y-3 transition-all duration-300 cursor-pointer flex  justify-center items-center border-[3px] border-[#eb2026] rounded-full h-[100px] w-[100px]">
          <img src={testIcon} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center font-semibold">
          <p>FIND</p>
          <p>A TEST</p>
        </div>
      </div>
      <div className=" w-[2.5px] h-[150px] bg-[#eb2026]"></div>

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="hover:-translate-y-3 transition-all duration-300 cursor-pointer flex  justify-center items-center border-[3px] border-[#eb2026] rounded-full h-[100px] w-[100px]">
          <img src={reportIcon} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center font-semibold">
          <p>DOWNLOAD</p>
          <p>REPORT</p>
        </div>
      </div>
      <div className=" w-[2.5px] h-[150px] bg-[#eb2026]"></div>

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="hover:-translate-y-3 transition-all duration-300 cursor-pointer flex  justify-center items-center border-[3px] border-[#eb2026] rounded-full h-[100px] w-[100px]">
          <img src={locationIcon} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center font-semibold">
          <p>FIND YOUR </p>
          <p>NEARREST CENTER</p>
        </div>
      </div>
    </div>
  );
}

export default AllOptions;
