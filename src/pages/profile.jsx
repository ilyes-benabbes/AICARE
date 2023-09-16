import React from 'react'
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import "./profile.css"







function Profile({user}) {
    console.log(user)
    console.log("above here user : ")

/**
 * 
// ! variables here 
 */ 
const RATING = 3 // if the value is not round , make it round . 






















/**
 * 
// ! HOOKS HERE 
 */
























/**
 * 
// ! funcions HERE 
 */

function generateRating(){
    const jsxElements = []
    for (let i = 0; i < RATING; i++) {
        jsxElements.push( <img
            className={styles.starFillChild}
            alt=""
            src="/star-14.svg"
          />);
      }
      for (let i = 0; i < 5-RATING; i++) {
        jsxElements.push( <img
            className={styles2.starFillChild}
            alt=""
            src="/star.svg"
          />);
      }
    return jsxElements
}

//---------------------------//
function WithLabelExample( prog) {
    return <ProgressBar  variant="success" className="w-75 mb-3" now={prog} label={`${prog}%`} />;
  }






  return (

    // <div class="container mt-4 mb-4 p-3  d-flex justify-content-center  ">
    <div class="card p-4  ">
        <div class=" image d-flex flex-column justify-content-center align-items-center">
            <button class="btnS btnS-secondary"> <img src="human.png" height="100" width="100" /></button>
            <span class="name mt-3">Eleanor Pena</span> <span class="idd">ilyesdfsddfsdfdsbenabbes.gami.com</span>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                <span class="idd1">CareGiver</span> <span><i class="fa fa-copy"></i></span> </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                {/* <span class="number">1069 

                <span class="follow">Followers</span>
                
                </span> */}
                
           <div className="flex-column justify-content-center align-items-center special">


<p >
  <span class="idd">Address :</span>
  <span > {"user.afsdfs"}</span>
</p>

<p >
  <span className='idd'>Phone :</span>
  <span > {"user.phofsadfasdfne"}</span>
</p>

<p >
  <span className='idd'>age :</span>
  <span > {" align-gn-items- ffdr.items- ffdr.dob"}</span>
</p>

<p >
  <span className='idd'>gender :</span>
  <span > {"user.gegn-items- ffdr.nder"}</span>
</p>






</div>
                
                
                
                
                
                
                 </div>
            <div class=" d-flex mt-2">  </div>


            <span > {"account completeness"}</span>

            {WithLabelExample(80)}
           
            
           
            <button className="btn btn-secondary">Edit Profile</button>
        </div>
    </div>
    // </div>
    
    
    
  ) // fin du return
}

export default Profile