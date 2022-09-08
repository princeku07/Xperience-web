import { useState } from "react";
import './navbar.css'
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import { navLinks } from "../index.js";

const  Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
  <div className=" nav_bar_div items-center py-1 pt-1 px-1">
    <nav className='nav_bar w-full flex py-1 justify-between items-center  rounded-full'>
        <img src={logo} alt="logo" className='ml-5 w-[55px]  md:w-50' />

      <ul className="  list-none sm:flex hidden justify-end items-center flex-1 mr-5">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-green-900 font-medium  cursor-pointer text-[16px] ${
              active === nav.title ? "text-green-500" : "text-red"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-5"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-1"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 toggle_bar absolute top-5 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-green-500" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;

