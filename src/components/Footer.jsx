// import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" footer col-center">
      <div className="links drow g2">
        <a href="https://www.gmail.com/owenergmail" target="_blank" rel="noopener noreferrer"> 
        <p>Mail</p>
        </a>
        
        
        <a href="https://www.fb.com/owenerFB" target="_blank" rel="noopener noreferrer"> 
        <p>Facebook</p>
        </a>
        <a href="https://www.linkedin.com/owener" target="_blank" rel="noopener noreferrer"> 
        <p>LinkedIn</p>
        </a>
      </div>
      <div>@2023 all rights reserved</div>
      <div />
    </div>
  );
};

export default Footer;
