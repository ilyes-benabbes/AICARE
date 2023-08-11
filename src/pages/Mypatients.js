import React from 'react'
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

function Mypatients() {
  return (<>
    
    <h1>My Patients</h1>
    <div className={styles2.column} id={styles2.mypatients}>
           
      <div className={styles2.patient}>
        <div className={styles2.leftSide}>
          <div className={styles2.imagemypatien}>
            <img src="/pic2.png" alt="Profile" className={styles2.image} />
          </div>
          <p>{"patient name here"}</p>
    
        </div>

        <div className={styles2.buttons}>
            <div className={styles2.compond}>
                <span>check contract</span>
                <img src="/arrow-ios-forward.svg" className={styles2.icon}></img>
                 </div>
            <div className={styles2.compond}>
                <span>check profile</span>
                <img src="/arrow-ios-forward.svg" className={styles2.icon}></img>
                 </div>
            <div className={styles2.compond}>
                <span>open chat</span>
                <img src="/arrow-ios-forward.svg" className={styles2.icon}></img>
                 </div>

        </div>

      </div>
      <div className={styles2.patient}>
        <div className={styles2.leftSide}>
          <div className={styles2.imagemypatien}>
            <img src="/pic2.png" alt="Profile" className={styles2.image} />
          </div>
          <p>{"patient name here"}</p>
    
        </div>

        <div className={styles2.buttons}>
            <div className={styles2.compond}>
                <span>check contract</span>
                <img src="/arrow-ios-forward.svg" className={styles2.icon}></img>
                 </div>
            <div className={styles2.compond}>
                <span>check profile</span>
                <img src="/arrow-ios-forward.svg" className={styles2.icon}></img>
                 </div>
            <div className={styles2.compond}>
                <span>open chat</span>
                <img src="/arrow-ios-forward.svg" className={styles2.icon}></img>
                 </div>

        </div>

      </div>
      <div className={styles2.patient}>
        <div className={styles2.leftSide}>
          <div className={styles2.imagemypatien}>
            <img src="/pic2.png" alt="Profile" className={styles2.image} />
          </div>
          <p>{"patient name here"}</p>
    
        </div>

        <div className={styles2.buttons}>
            <div className={styles2.compond}>
                <span>check contract</span>
                <img src="/arrow-ios-forward.svg" className={styles2.icon}></img>
                 </div>
            <div className={styles2.compond}>
                <span>check profile</span>
                <img src="/arrow-ios-forward.svg" className={styles2.icon}></img>
                 </div>
            <div className={styles2.compond}>
                <span>open chat</span>
                <img src="/arrow-ios-forward.svg" className={styles2.icon}></img>
                 </div>

        </div>

      </div>


    </div> 
</>

  );
}

export default Mypatients