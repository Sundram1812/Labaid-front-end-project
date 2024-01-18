import React from "react";

function AboutUs() {
  return (
    <div className=" w-8/12 mx-auto my-4 bg-orange-100 py-10 px-6 rounded-md">
    
      <div className=" my-8">
        <h2 className="text-[1.2em] font-bold my-2">About Us:</h2>
        <p className="text-[1.2em]">
          <span className=" font-bold ">Labaid Diagnostics Private Limited</span>
          is an Indian Diagnostics company situated in Kolkata formed in 13th
          October 2023. Labaid is focused to commence its business of providing
          pathology services all over the country, primarily in Eastern India.
          Labaid is offering a wide range of routine and specialized diagnostics
          tests as well as wellness packages that cover an extensive range of
          specialties. We are in plan to provide corporate wellness services
          comprising several pathology tests as well as home collection
          services, which helps us in acting as a one-stop solution for
          diagnostics testing.
        </p>
      </div>

      {/* VISION */}
      <div className="my-8">
        <h2 className="text-[1.2em] font-bold my-2">Vision:</h2>
        <p className="text-[1.2em]">To be the most trusted & affordable brand of Diagnostics Industry</p>
      </div>

      {/* MISSION */}
      <div className="my-8">
        <h2 className="text-[1.2em] font-bold my-2">Mission:</h2>
        <p className="text-[1.2em]">
          To be a market leader for providing affordable & timely healthcare
          with best report quality aligned with cutting edge technology
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
