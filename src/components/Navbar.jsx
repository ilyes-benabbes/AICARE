import { Mylogo } from "./sub/mylogo";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import "../styles/navbar.scss";

function navbar() {
  return (
    <>
      <div className="Navbar drow-between">
        <Mylogo></Mylogo>
        <div className="head links drow g3 ">
          <p> dashboard </p>
          <p > home </p>
          <p > contact us </p>
          <p > my contracts </p>
          <img src="vite.svg" alt="message" className="icon" />
          
        </div>
      </div>
    </>
  );
}

export default navbar;
