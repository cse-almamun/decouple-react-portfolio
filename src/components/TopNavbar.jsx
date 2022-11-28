import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets/img";
import { navLinks } from "../constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const TopNavbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-white w-full flex py-2 md:px-[120px] px-[50px] justify-between items-center navbar">
      <Link to="/">
        <img
          className="w-[74px] h-[74px] text-white"
          src={logo}
          alt="amaratlimited"
        />
      </Link>

      {/* Desktop Navbar Navbar */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-nunito cursor-pointer text-lg font-semibold ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={() => setActive(nav.title)}
            key={index}
          >
            <NavLink to={nav.path}>{nav.title}</NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          className="w-[30px]  h-[30px] object-contain font-semibold text-primary"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-nunito font-medium cursor-pointer text-[16px]`}
                onClick={() => setActive(nav.title)}
              >
                <NavLink to={nav.path}>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
