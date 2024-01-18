import React from "react";

function BookATest() {
  return (
    <div className=" w-6/12 my-6 py-12 px-4 rounded-sm border border-[#eb2026] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h2 className="text-center text-[2rem] font-semibold text-[#eb2026] mb-3">
        Book Your Test Now
      </h2>
      <p className="text-center font-semibold text-[#414141] mb-4">
        Fill Out The Form
      </p>
      <form action="" className=" flex flex-col gap-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Pin Code*"
            className=" outline-none border border-[#515115] rounded-sm w-full py-[6px] px-3"
          />
          <input
            type="text"
            placeholder="Enter Name*"
            className=" outline-none border border-[#515115] rounded-sm w-full py-[6px] px-3"
          />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Mobile Number*"
            className=" outline-none border border-[#515115] rounded-sm w-full py-[6px] px-3"
          />
          <input
            type="email"
            placeholder="Enter Email*"
            className=" outline-none border border-[#515115] rounded-sm w-full py-[6px] px-3"
          />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Age*"
            className=" outline-none border border-[#515115] rounded-sm w-full py-[6px] px-3"
          />

          <div className="w-full">
            <select
              name=""
              id="gender"
              className=" w-full border border-[#515115] py-[6px] px-3 rounded-sm"
            >
              <option value="">Select Gender</option>
              <option value="male" className="py-6">
                Male
              </option>
              <option value="female">Female</option>
              <option value="female">Trans</option>
            </select>
          </div>
        </div>

        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Address (atleast 25 characters)*"
            className=" outline-none border border-[#515115] w-full rounded-sm px-3"
          ></textarea>
        </div>

        <div className="flex gap-3">
          <div className="w-full">
            <select
              name=""
              id="packages"
              className=" w-full border border-[#515115] py-[6px] px-3 rounded-sm"
            >
              <option value="">Select Package*</option>
              <option value="full_body">Full Body</option>
              <option value="20_test">20 Test</option>
              <option value="10_test">10 Test</option>
            </select>
          </div>

          <div className="w-full">
            <select
              name=""
              id="packages"
              className=" w-full border border-[#515115] py-[6px] px-3 rounded-sm"
            >
              <option value="">Select slot*</option>
              <option value="6-10">6am-10am</option>
              <option value="12-4">12pm-4pm</option>
              <option value="5-9">5pm-9pm</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <label
            htmlFor=""
            className="w-full border border-[#515115] py-[6px] px-3 rounded-sm"
          >
            Select Appointment Date*
          </label>
          <input
            type="date"
            placeholder="select "
            className="w-full border border-[#515115] py-[6px] px-3 rounded-sm"
          />
        </div>

        <div className="flex justify-center items-baseline gap-3">
          <input
            type="checkbox"
            id="reportCheck"
            className=" accent-[#eb2026] cursor-pointer "
          />
          <label
            htmlFor="reportCheck"
            className=" cursor-pointer font-bold text-[#515151]"
          >
            Additional Rs.75 for printed Reports
          </label>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <label htmlFor="" className=" font-bold text-[#515151]">
            Reach me on :
          </label>
          <div className="flex justify-center items-baseline gap-1">
            <input
              type="checkbox"
              id="whatsApp"
              className=" accent-[#eb2026] cursor-pointer "
            />
            <label
              htmlFor="whatsApp"
              className=" cursor-pointer font-semibold text-[#515151]"
            >
              WhatsApp
            </label>
          </div>

          <div className="flex justify-center items-baseline gap-1">
            <input
              type="checkbox"
              id="call"
              className=" accent-[#eb2026] cursor-pointer "
            />
            <label
              htmlFor="call"
              className=" cursor-pointer font-semibold text-[#515151]"
            >
              Call
            </label>
          </div>

          <div className="flex justify-center items-baseline gap-1">
            <input
              type="checkbox"
              id="Email"
              className=" accent-[#eb2026] cursor-pointer "
            />
            <label
              htmlFor="Email"
              className=" cursor-pointer font-semibold text-[#515151]"
            >
              Email
            </label>
          </div>

          <div className="flex justify-center items-baseline gap-1">
            <input
              type="checkbox"
              id="SMS"
              className=" accent-[#eb2026] cursor-pointer "
            />
            <label
              htmlFor="SMS"
              className=" cursor-pointer font-semibold text-[#515151]"
            >
              SMS
            </label>
          </div>
        </div>

        <div className="w-full flex justify-center items-baseline gap-2 px-10">
          <input
            type="checkbox"
            className=" accent-[#eb2026] cursor-pointer "
          />
          <span className=" text-center font-semibold text-[#313131]">
            I authorize Thyrocare representative to contact me. I understand
            that this will override the DND status on my mobile number
          </span>
        </div>

        <div className="w-full mt-3">
          <button className=" py-2 bg-[#eb2026] rounded-sm text-white font-bold w-full">
            Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookATest;
