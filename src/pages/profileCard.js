import React from 'react'
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';







function ProfileCard() {

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
    return <ProgressBar  variant="success" className={styles2.progress} now={prog} label={`${prog}%`} />;
  }














  return (
    <>
    
    
    <div className={styles2.column} id={styles2.containerAlpha}> 
           
           <div className={styles2.cirulairecontainer}>

          <img src="/pic2.png" alt="Profile" className={styles2.image} />
          
          </div>
            
              <b className={styles2.bigText}>{"benabbes ilyes baha eddine the third"}</b>


                {/* RAting */}
                {/* <div className={styles.starFill}>
                <>
                    {generateRating()}
                </>
                </div> */}

                  <div className={styles2.rate}>
                 <Rating  defaultValue={3.1} precision={0.5} readOnly />
                  </div>
              


            <div className={styles.frame1} />
          


           <div className={styles2.columnLeft}>

              <span >
                <b>Name :</b>
                <p > {" fill here name"}</p>
              </span>

              <span >
                <b>address :</b>
                <p > {" fill here les alles "}</p>
              </span>

              <span >
                <b>phone :</b>
                <p > {" fill here aloha  "}</p>
              </span>

              <span >
                <b>age :</b>
                <p > {" fill here"}</p>
              </span>

              <span >
                <b>gender :</b>
                <p > {" fill here"}</p>
              </span>

              <span >
                <b>role :</b>
                <p > {"  fill here"}</p>
              </span>
        

          </div>




          
            <b className={styles.accountCompleteness}>account completenessss</b>
           
              {/*  progress */}
            {WithLabelExample(80)}

           

             <Button > edit </Button>
            
          </div>
        
    

        
        
    
    
    </> // fin du components qui englobe le tous
  ) // fin du return
}

export default ProfileCard