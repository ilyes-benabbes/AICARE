import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ProfileCard from "../pages/profileCard";

function About() {
  return (
    <div className="about col-center   pad g3">
      <p className="header  drow-center ">About us </p>

      <div className="drow g3 ">
        <div className="aboutext sectionfontthin ">
          We Are Your Trusted Caregiving Companion At Your Caregiving Service,
          we are driven by a simple yet profouimportance of finding the right
          caregiver who not only provides support but also becomes a trusted
          companion. Oo families. We are not just a caregiving service; we are a
          family dedicated to your well-being.
        </div>
        <div className="arrow"></div>

        <div className="col-around buttons">
       
          <Link to={"/contact"}>
            <button className="btnthird">Contact Us</button>
          </Link>
          <p className="header drow-center"> or</p>
          <Link to={"/about"}>
            <button className="btnthird">know more</button>
          </Link>
        </div>
        {/* <img src='/public/B.jpg' className='aboutimage'>
</img> */}
      </div>
    </div>
  );
}

export default About;
