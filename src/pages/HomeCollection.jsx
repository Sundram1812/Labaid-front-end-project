import React from "react";

function HomeCollection() {
  return (
    <div className=" w-10/12 mx-auto my-8">
      <h2 className=" text-[2rem] font-semibold my-5">
        Home Collection <span className="text-[#eb2026]">Services</span>
      </h2>
      <p className="text-[#eb2026] text-[1.5rem] mt-6 mb-2">
        TO BOOK YOUR HOME COLLECTION, PLEASE FILL UP THE FORM BELOW
      </p>

      <form action="">
        <div className=" flex justify-between items-center gap-3">
          <div className=" flex flex-col gap-1 justify-center w-full">
            <label htmlFor="" className=" font-semibold text-[#212121]">
              Name*
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className=" outline-none border border-[#515151] rounded-sm py-1 px-2 w-full"
            />
          </div>

          <div className=" flex flex-col gap-1 justify-center w-full">
            <label htmlFor="" className=" font-semibold text-[#212121]">
              Mobile No*
            </label>
            <input
              type="text"
              placeholder="Mobile No"
              className=" outline-none border border-[#515151] rounded-sm py-1 px-2 w-full"
            />
          </div>

          <div className=" flex flex-col gap-1 justify-center w-full">
            <label htmlFor="" className=" font-semibold text-[#212121]">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Mobile No"
              className=" outline-none border border-[#515151] rounded-sm py-1 px-2 w-full"
            />
          </div>

          <div className=" flex flex-col gap-1 justify-center w-full">
            <label htmlFor="" className=" font-semibold text-[#212121]">
              Pincode
            </label>
            <input
              type="text"
              placeholder="Mobile No"
              className=" outline-none border border-[#515151] rounded-sm py-1 px-2 w-full"
            />
          </div>
        </div>

        <div className=" my-8">
          <p className=" font-bold my-3">
            If you know the test details please select the test OR upload
            prescription OR leave them blank and our executives will call you to
            know the details
          </p>

          <div className=" flex w-full justify-between items-center ">
            <div className=" flex items-baseline accent-[#eb2026] gap-2 font-semibold text-[#414141]  my-2">
              <input
                type="radio"
                id="test"
                name="testDetails"
                className=" cursor-pointer"
              />
              <label htmlFor="test" className=" cursor-pointer">
                Select Test
              </label>
            </div>

            <div className=" flex items-baseline accent-[#eb2026] gap-2 font-semibold text-[#414141]  my-2">
              <input
                type="radio"
                id="prescription"
                name="testDetails"
                className=" cursor-pointer"
              />
              <label htmlFor="prescription" className=" cursor-pointer">
                Upload Prescription{" "}
              </label>
            </div>

            <div className=" flex items-baseline accent-[#eb2026] gap-2 font-semibold text-[#414141]  my-2">
              <input
                type="radio"
                id="rtpcr"
                name="testDetails"
                className=" cursor-pointer"
              />
              <label htmlFor="rtpcr" className=" cursor-pointer">
                {" "}
                COVID-19 Qualitative RTPCR
              </label>
            </div>

            <div className=" flex items-baseline accent-[#eb2026] gap-2 font-semibold text-[#414141]  my-2">
              <input
                type="radio"
                id="notSure"
                name="testDetails"
                className=" cursor-pointer"
              />
              <label htmlFor="notSure" className=" cursor-pointer">
                Not Sure What is to be Done
              </label>
            </div>
          </div>
        </div>

        <div className=" flex items-baseline accent-[#eb2026] gap-2 font-semibold text-[#414141]  my-2">
          <input
            type="checkbox"
            id="t&c"
            name="testDetails"
            className=" cursor-pointer"
          />
          <label htmlFor="t&c" className=" cursor-pointer">
            Agree Terms and Condition
          </label>
        </div>

        <div className="flex w-full justify-end">
          <button className="py-3 px-8 rounded-sm bg-[#eb2026] text-white font-bold">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default HomeCollection;
