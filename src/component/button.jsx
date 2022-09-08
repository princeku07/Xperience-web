import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary  bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;