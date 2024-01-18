import React from "react";

function ContactUs() {
  return (
    <div className=" w-10/12 mx-auto px-10 mb-8">
      <div className=" my-6">
        <h1 className="text-[2rem] font-semibold text-[#eb2026] underline underline-offset-4 my-8">
          Corporate Office:
        </h1>

        <h2 className="text-[1.5rem] font-bold text-[#eb2026] my-1">
          Labaid Diagnostics Private Limited
        </h2>
        <p className="text-[1.2rem] font-semibold w-[60%]">
          Rudrani Green Valley, 1st floor, Holding #303 Jessore Road, (Beside
          Indian Oil Petrol Pump), Doltala, Madhyamgram, Space # A & B, North 24
          Pgs, Kolkata: 700132
        </p>
      </div>

      <div>
        <h2 className="text-[2rem] font-semibold text-[#eb2026] underline underline-offset-4 mt-8 mb-4">
          Help & Support
        </h2>
        <p className="text-[1.2rem] font-semibold w-[60%]">
          <span className="text-[#eb2026] font-semibold text-[1.3rem]">
            Mobile
          </span>
          : 8910449202, 9123882412
        </p>
        <p className="text-[1.2rem] font-semibold w-[60%]">
          <span className="text-[#eb2026] font-semibold text-[1.3rem]">
            Email
          </span>{" "}
          : info@labaiddiagnostics.in, support@labaiddiagnostics.in
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
