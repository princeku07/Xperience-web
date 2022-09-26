import { useState } from "react";
import './navbar.css'
import {Link} from 'react-router-dom';
import logo from '../../assets/xperience_logo.png';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import { navLinks } from "../index.js";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" nav_bar_div items-center py-1 pt-1 px-1">
      <nav className='nav_bar w-full flex py-1 justify-between items-center  rounded-full'>
        <Link to='/home'><img href="home" src={logo} alt="logo" className='ml-5 w-[55px]  md:w-50 cursor-pointer' /></Link>

        <ul className="  list-none sm:flex hidden justify-end items-center flex-1 mr-5">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`text-white font-medium  cursor-pointer text-[20px] ${active === nav.title ? "text-green-500" : "text-red"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-5"}`}
              onClick={() => setActive(nav.title)}
            >
              {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
              <Link to={`/${nav.id}`}> {nav.title} </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-1 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 toggle_bar   absolute top-12 right-0 mx-0.5  my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-row ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` font-bold cursor-pointer text-[16px] ${active === nav.title ? "text-green-500" : "text-white" 
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-0.1"} ml-3  mt-0.1 `}
                  onClick={() => setActive(nav.title)}
                >
                  {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
                  <Link to={`/${nav.id}`}> {nav.title} </Link>
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

