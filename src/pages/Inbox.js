import React from 'react'
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

function Inbox() {
  return (<>
    
    <h1>My Inbox</h1>
    <div className={styles2.column} id={styles2.mypatients}>
           


           {/* from here  */}
      <div className={styles2.patient}>
        <div className={styles2.leftSide}>
          <div className={styles2.imagemypatien}>
            <img src="/pic2.png" alt="Profile" className={styles2.image} />
          </div>
          <div className={styles2.msg}>
          <b>{"patient name here"}</b>
          <p>{"hey guys are you okay with working part time job , with espee please sir now i am busy inser message here "}</p>
          
          {/* *! do not forget to limit the message size to 600 characters max i think */}

          </div>
    
        </div>

        <div className={styles2.buttons}>
            
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
      {/* to here  */}
          {/* from here  */}
          <div className={styles2.patient}>
        <div className={styles2.leftSide}>
          <div className={styles2.imagemypatien}>
            <img src="/pic2.png" alt="Profile" className={styles2.image} />
          </div>
          <div className={styles2.msg}>
          <b>{"patient name here"}</b>
          <p>{"hey guys are you okay with working part time job , with espee please sir now i am busy inser message here "}</p>
          
          {/* *! do not forget to limit the message size to 600 characters max i think */}

          </div>
    
        </div>

        <div className={styles2.buttons}>
            
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
      {/* to here  */}
          {/* from here  */}
          <div className={styles2.patient}>
        <div className={styles2.leftSide}>
          <div className={styles2.imagemypatien}>
            <img src="/pic2.png" alt="Profile" className={styles2.image} />
          </div>
          <div className={styles2.msg}>
          <b>{"patient name here"}</b>
          <p>{"hey guys are you okay with working part time job , with espee please sir now i am busy inser message here "}</p>
          
          {/* *! do not forget to limit the message size to 600 characters max i think */}

          </div>
    
        </div>

        <div className={styles2.buttons}>
            
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
      {/* to here  */}




    </div> 
</>

  );
}

export default Inbox