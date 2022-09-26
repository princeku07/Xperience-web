import React, { useEffect, useState, useCallback } from "react";
import styles from "../../style";
import "./Collection.css";
import { vuforia, unreal } from "../../assets";
import { AiFillFire, AiFillHeart, AiOutlineLineHeight } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowAutofitRight } from "react-icons/tb";

const Collection = () => {
  const [idNumber, setIdNumber] = useState(1);
  const sliderData = [
    {
      title: "HealthCare",
      id: 1,
      image: vuforia,
    },
    {
        title: "Training",
      id: 2,
      image: unreal,
    }
  ];
  return (
    <div className="grid  place-items-center m-9">
      <h1 className={styles.heading2}>Real life Usecases</h1>
    </div>
  );
};
export default Collection;
