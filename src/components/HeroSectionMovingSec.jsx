import React from "react";
import { useState } from "react";
import banner1 from "../assets/moving_img_1.png";
import banner2 from "../assets/moving_img_2.png";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

function HeroSectionMovingSec() {
  const [imgNumber, setImgNumber] = useState(0);
  const moveImg = [banner1, banner2];

  function handleLeftButton() {
    if (imgNumber === 0) {
      setImgNumber(1);
    } else {
      setImgNumber((prev) => prev - 1);
    }
  }

  function handleRightButton() {
    if (imgNumber === 1) {
      setImgNumber(0);
    } else {
      setImgNumber((prev) => prev + 1);
    }
  }

  return (
    <div className=" relative ">
      <IoIosArrowDropleft
        onClick={handleLeftButton}
        className=" absolute left-0 top-[50%] cursor-pointer text-[2.5em] text-[#717171] translate-y-[-50%] "
      />

      <img
        src={moveImg[imgNumber]}
        alt=""
        className=" rounded-md object-contain transition-all duration-700 "
      />
      <IoIosArrowDropright
        onClick={handleRightButton}
        className=" absolute right-0 bottom-[50%] cursor-pointer text-[2.5em] text-[#717171] translate-y-[50%] "
      />
    </div>
  );
}

export default HeroSectionMovingSec;
