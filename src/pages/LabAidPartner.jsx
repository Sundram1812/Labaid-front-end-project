import React from "react";
import { useState } from "react";

function LabAidPartner() {
  return (
    <div className="w-8/12 my-6 py-12 px-10 rounded-sm border border-[#eb2026] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h2 className=" text-center text-[2rem] font-semibold mb-10 text-[#eb2026]">
        Become a Labaid Partner
      </h2>
      <h2 className=" font-semibold text-[#eb2026]">FILL YOUE DETAILS HERE</h2>

      <form action="" className="w-full">
        <div className="flex w-full gap-10 mb-10 mt-5">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              placeholder="Please Enter Your Name"
              className="border-b border-[#414141] w-full py-2 outline-none"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold mb-1">
              Age:
            </label>
            <input
              type="text"
              placeholder="Please Enter Your Age"
              className="border-b border-[#414141] w-full py-2 outline-none"
            />
          </div>
        </div>

        <div className="flex w-full gap-6 my-10">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold mb-1">
              Locality:
            </label>
            <input
              type="text"
              placeholder="Enter Your Locality Name"
              className="border-b border-[#414141] w-full py-2 outline-none"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold mb-1">
              Carpet Area of Commercial Property:
            </label>
            <input
              type="text"
              placeholder="Enter Your Carpet Area of Commercial Property"
              className="border-b border-[#414141] w-full py-2 outline-none"
            />
          </div>
        </div>

        <div className="flex w-full gap-6 my-10">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold mb-1">
              Mobile No:
            </label>
            <input
              type="text"
              placeholder="Enter Your Mobile No"
              className="border-b border-[#414141] w-full py-2 outline-none"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold mb-1">
              Email Address:
            </label>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b border-[#414141] w-full py-2 outline-none"
            />
          </div>
        </div>

        <div className="flex w-full gap-6 my-10">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold mb-1">
              Pincode:
            </label>
            <input
              type="text"
              placeholder="Enter Your Pin Code"
              className="border-b border-[#414141] w-full py-2 outline-none"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold mb-1">
              Landmark:
            </label>
            <input
              type="text"
              placeholder="Enter Landmark"
              className="border-b border-[#414141] w-full py-2 outline-none"
            />
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-[#414141]">
            Amount Willing to invest:
          </h2>
          <div className="flex gap-8 items-center mt-4 ">
            <div className="flex justify-center items-baseline gap-2 ">
              <input
                type="radio"
                id="L1cr"
                className="cursor-pointer accent-[#eb2026]"
                name="investingAmount"
              />
              <label
                htmlFor="L1cr"
                className=" cursor-pointer font-semibold text-[#414141]"
              >
                Below Rs. 1 crore
              </label>
            </div>

            <div className="flex justify-center items-baseline gap-2 ">
              <input
                type="radio"
                id="secondAmount"
                className="cursor-pointer accent-[#eb2026]"
                name="investingAmount"
              />
              <label
                htmlFor="secondAmount"
                className=" cursor-pointer font-semibold text-[#414141]"
              >
                Below Rs. 1 crore
              </label>
            </div>

            <div className="flex justify-center items-baseline gap-2 ">
              <input
                type="radio"
                id="thirdAmount"
                name="investingAmount"
                className="cursor-pointer accent-[#eb2026] "
              />
              <label
                htmlFor="thirdAmount"
                className=" cursor-pointer font-semibold text-[#414141]"
              >
                Below Rs. 1 crore
              </label>
            </div>

            <div className="flex justify-center items-baseline gap-2  ">
              <input
                type="radio"
                id="fourthAmount"
                name="investingAmount"
                className="cursor-pointer accent-[#eb2026]"
              />
              <label
                htmlFor="fourthAmount"
                className=" cursor-pointer font-semibold text-[#414141]"
              >
                Below Rs. 1 crore
              </label>
            </div>
          </div>
        </div>

        <div className=" w-full h-[1px] bg-[#eb2026]"></div>
        <div className=" w-full h-[2px] bg-[#eb2026] my-3"></div>
      </form>

      <div>
        <div>
          <h2 className="text-[2rem] font-semibold my-8">
            Why Choose Labaid for Lab Franchisee ?
          </h2>
          <p className=" text-[1.2em] font-bold text-[#eb2026]">
            Labaid is aimed to give the best margin in the industry:
          </p>
          <ul className=" list-disc ml-8 font-semibold">
            <li>Low B2B Price</li>
            <li> Volume discounts available</li>
            <li> Smooth IT Solutions</li>
            <li> Best Logistics Support</li>
          </ul>
        </div>

        <div className="my-4">
          <h2 className=" text-[1.2em] font-bold text-[#eb2026]">
            Benefits Of Becoming Labaid Franchisee Partner:
          </h2>
          <ul className=" list-disc ml-8 font-semibold">
            <li> Sample Pickup from Doorsteps in all Major areas</li>
            <li> Easy Data Access ( Upload and Download)</li>
          </ul>
        </div>

        <div>
          <h2 className=" text-[1.2em] font-bold text-[#eb2026] my-4" >
            Requirements to Become a Labaid Franchisee Partner:
          </h2>
          <div className=" grid grid-cols-3 grid-rows-2 gap-3">
            <div className="flex justify-center items-center border border-[#313131] h-[150px] w-[250px] px-14 bg-red-500 text-white font-semibold">Premises – Rented or Owned</div>
            <div className="flex justify-center items-center border border-[#313131] h-[150px] w-[250px] px-14 bg-red-500 text-white font-semibold">Carpet Area (150 sq. ft. to 300 sq. ft.)</div>
            <div className="flex justify-center items-center border border-[#313131] h-[150px] w-[250px] px-14 bg-red-500 text-white font-semibold">Space for Glow Sign and other Signage</div>
            <div className="flex justify-center items-center border border-[#313131] h-[150px] w-[250px] px-14 bg-red-500 text-white font-semibold">Electricity, Computer, Printer & Internet Connection</div>
            <div className="flex justify-center items-center border border-[#313131] h-[150px] w-[250px] px-14 bg-red-500 text-white font-semibold">Water Connection & Toilet</div>
            <div className="flex justify-center items-center border border-[#313131] h-[150px] w-[250px] px-14 bg-red-500 text-white font-semibold">Availability of Drinking Water</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabAidPartner;
