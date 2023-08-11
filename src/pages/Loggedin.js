import React from 'react'
import Cert from './Cert'
import ProfileCard from './profileCard'
import Inbox from './Inbox'
import Mypatients from './Mypatients'
import styles from "./mycss.module.css"
import Navbar from '../components/Navbar'
import NavbarGiver from '../components/NavbarGiver'

function Loggedin() {
  return (
    <div id={styles.loggedin}>
        {/* <Navbar></Navbar> */}
        <NavbarGiver></NavbarGiver>



{/* here begins the bigges contianre the violet one  */}
        <div className={styles.violet}>






{/* here starts the left container blue*/}
        <div className={styles.blue}>


            <h1> your profile</h1>
            <ProfileCard></ProfileCard>
            <h1>your certificats</h1>
            <Cert></Cert>












        </div>
{/* here ends the left container the blue  */}




{/* here begins the right contiainer the green  */}
    <div className={styles.green}>

            <Mypatients></Mypatients>
            <Inbox></Inbox>










    </div>
    {/* here engs the right contianre the green one  */}





        
           


        </div> 
        {/* here finished the container of all the violet . */}


    </div>
    // here ends the contianre of the page the red
  )
}

export default Loggedin