// components/Navbar.js
"use client"
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import NavLink from './Navlink'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from './../../../Assets/Images/My logo.png';
import menu from './../../../Assets/Icons/menu.svg';
import close from './../../../Assets/Icons/close.svg';


const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/About',
  },
  {
    title: 'Portfolio',
    path: '/Portfolio',
  },
  {
    title: 'Contact',
    path: '/Contact',
  },
];

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [switchMenu, setSwitchMenu] = useState(menu);
  const path = usePathname();

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
    setSwitchMenu(prev => (prev === menu ? close : menu));
  };

  return (
    <nav className="fixed mx-auto w-full z-10 bg-[#00ABE4] box-border top-0  bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-2xl md:text-5xl font-semibold">
          <Image src={logo} alt="Alayian" className="h-12 w-20 md:h-28 md:w-36 lg:h-28 lg:w-44 xl:h-20 xl:w-28" />
        </Link>
        <div className="cursor-pointer sm:hidden w-[30%] p-8 " onClick={toggleMenu}>
          <Image src={switchMenu} alt="menu" className="cursor-pointer object-contain " />
        </div>
        <div className={`menu hidden sm:block md:block md:w-auto" id="navbar`}>
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} isActive={path === link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showMenu && (
        <div className="flex flex-col text-white gap-2 pr-4 w-[20%] ml-[45%]">
          {navLinks.map((link, index) => (
            <Link key={index} className={`font-medium text-lg ${router.pathname === link.path ? 'bg-red-300' : ''}`} href={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};


export default Navbar;
