import React from "react";
import logo from "../assets/labaid_logo.jpg"

function CompanyNameAndExp() {
  return (
    <div className="pt-3 ">
      <div className=" w-10/12 mx-auto flex justify-end">
          <img src={logo} alt="Labaid" className=" w-[150px] "/>
      </div>
    </div>
  );
}

export default CompanyNameAndExp;
