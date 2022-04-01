import React from "react";
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom';


const LinkCom = (props) => {
    const {name, link} = props.route;
  return <>
    <li className='mr-20 text-lg  mx-9' >
    
            <Link to={link} onClick={() => props.setOpen(!props.open)}>{name}</Link>
    </li>
  </>;
};

export default LinkCom;
