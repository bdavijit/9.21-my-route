import React from "react";
import '../Navbar/navbar.css'


const Link = (props) => {
    const {name, link} = props.route;
  return <>
    <li className='mr-20 text-lg '>
            <a href={link}>{name}</a>
    </li>
  </>;
};

export default Link;
