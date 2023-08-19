import React from 'react'
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

function Mypatients({Users , type}) {

function print(e , key ,id ){
    console.log("iii")
}

function handleProfile(e){

    const keyAttribute = e.currentTarget.getAttribute("user");
    console.log("Clicked on check contract - key:", keyAttribute);
    
}







  return (
  <>
    <h1>{ ` my ${type}s`}</h1>
    <div className={styles2.column} id={styles2.mypatients}>

    { 
    Users.map(user =>(
    <div  className={styles2.patient}>
      <div className={styles2.leftSide} key={user.id}>
        <div className={styles2.imagemypatien}>
          <img src={user.profileImage} alt="Profile" className={styles2.image} />
        </div>
        <p>{user.email}</p>
      </div>

      <div className={styles2.buttons}>
        <div className={styles2.compond}
        user={user.email}
        
        onClick={handleProfile}
          
          >
         <Link to={`/my-form/${user.email}`}><span>check contract</span></Link>
          {/* <Link to={`/my-form/${user.email}`}>See More</Link> */}
          <img src="/arrow-ios-forward.svg" className={styles2.icon} alt="Forward Arrow" />
        </div>
        <div className={styles2.compond}
        onClick={handleProfile}>
          <span>check profile</span>
          <img src="/arrow-ios-forward.svg" className={styles2.icon} alt="Forward Arrow" />

        </div>
        <div className={styles2.compond}
         onClick={print}>
          <span>open chat</span>
          <img src="/arrow-ios-forward.svg" className={styles2.icon} alt="Forward Arrow" />
        </div>
      </div>
    </div>
  ))
  }



        </div>

     


   
</>

  );
}

export default Mypatients