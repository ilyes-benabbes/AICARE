import { Mylogo } from "./sub/mylogo";
import { Link } from "react-router-dom";
import React from "react";
import "../styles/navbar.scss";


function navbar( {isLogged , isCaregiver }) {
  return (
    <>
      <div className="Navbar drow-between ">
        <Mylogo></Mylogo>
        <div className="   links drow g3 ">
         
           { isLogged ? <Link to = {"/Dashboard"} className="hover-underline-animation"> 
           <p>Dashboard</p>
           </Link>   : <Link to={"/land"} className="hover-underline-animation">
            <p> home </p>
          </Link> }
          <Link to={"/about"} className="hover-underline-animation">
            <p> about us </p>
          </Link>

          <Link to={"/contact"} className="hover-underline-animation">
            <p> contact </p>
          </Link>
          <Link to={"/pricing"} className="hover-underline-animation">
            <p> pricing </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default navbar;
