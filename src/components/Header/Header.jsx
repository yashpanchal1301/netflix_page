import React from 'react'
import logo from "../Home/logo.png";
import { Link } from 'react-router-dom';
import {ImSearch} from "react-icons/im"
import {FaUserAlt} from "react-icons/fa"

const Header = () => {
  return (
   <nav className="header">
    <img src={logo} alt="netflix" />

    <div>
        <Link to="/">TV Shows</Link>
        <Link to="/">Movies</Link>
        <Link to="/">Recently Added</Link>
        <Link to="/">My List</Link>
    </div>

    <ImSearch />
    <FaUserAlt />

   </nav>
  )
}

export default Header