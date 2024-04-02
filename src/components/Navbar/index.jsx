"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "./../../../Assets/Images/My logo.png"
import menu from "./../../../Assets/Icons/menu.svg"
import close from "./../../../Assets/Icons/close.svg"

import NavLink from "./Navlink";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/About/",
  },
  {
    title: "Portfolio",
    path: "/Portfolio",
  },
  {
    title: "Contact",
    path: "/Contact",
  },
];

const Navbar = () => {

  const [showmenu, setShowmenu] = useState(false);
  const [switchmenu, setSwitchmenu]= useState(menu)
  

  return (
    <nav className="fixed mx-auto w-full  bg-[#00ABE4]  box-border top-0 z-10  bg-opacity-100">
      <div className="flex container  lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl  font-semibold"
        >
          <Image src={logo} alt="Alayian" className="h-16 w-28 md:h-28 md:w-36 lg:h-28 lg:w-44 xl:h-38 xl:w-56" />
        </Link>
        <div className="cursor-pointer sm:hidden" onClick={()=>{
          setShowmenu(prev=> !prev);
           setSwitchmenu(prev=> prev=== menu ?close :  menu);
         
        }
      }>
          <Image src={switchmenu} alt="menu" className="cursor-pointer" width={20} height={20} />
          {/* <Image src={menu} alt="menu" className="cursor-pointer" /> */}
        </div>
        

        <div className={`menu hidden sm:block   md:block md:w-auto" id="navbar`}>
          <ul className="flex  p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      {showmenu && 
          <div className="flex flex-col text-white   gap-2  pr-4 w-[20%] ml-[45%]  ">
              <Link className="text-[#f8f7f9] font-medium text-lg" href="/">Home</Link>
              <Link className="text-[#f8f7f9] font-medium text-lg" href="/about">About</Link>
              <Link className="text-[#f8f7f9] font-medium text-lg" href="/portfolio">Portfilio</Link>
              <Link className="text-[#f8f7f9] font-medium text-lg" href="/">Contact</Link>

          </div>
           } 
    </nav>
  );
};

export default Navbar;
