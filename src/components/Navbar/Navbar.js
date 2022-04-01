import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/solid";
import './navbar.css'
import LinkCom from "../Link/Link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "Blogs", link: "/blogs" },
    { id: 4, name: "Abouts", link: "/About" },
    
  

  ];

  return (
    <>
      <nav className="bg-red-800">
        <div onClick={() => setOpen(!open)} className="w-10 h-10 md:hidden">
          {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
        <ul
          className={`md:flex md:justify-end justify-center  h-full absolute md:static text-white bg-red-800 md:p-4  md:w-full duration-500 ease-in ${
            open ? "top-15" : "top-[-1000px]"
          }`}
        >
          {routes.map((route) => (
            <LinkCom key={route.id} route={route} setOpen={setOpen} open={open}></LinkCom>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
