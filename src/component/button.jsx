import React from "react";

export const Button = ({ styles }) => (
  <button type="button" className={`py-2 px-2 font-poppins font-medium text-[18px] text-primary  bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 rounded-[10px] shadow-xl outline-none ${styles}`}>
    Experience more
  </button>
);
 export const Button2 = ({ styles }) => (
  <button type="button" className={`py-2 px-2 font-poppins font-medium text-[18px] text-primary  bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 shadow-xl rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
