import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import './navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "Coupons", link: "/coupons" },

  ];

  return (
    <>
      <nav className="bg-red-800">
        <div onClick={() => setOpen(!open)} className="w-10 h-10 md:hidden">
          {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
        <ul
          className={`md:flex md:justify-end justify-center absolute md:static text-white bg-red-800 md:p-4  md:w-full duration-500 ease-in ${
            open ? "top-15" : "top-[-220px]"
          }`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
