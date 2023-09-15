import React, { useState , useEffect} from 'react'
import Cert from './Cert'
import ProfileCard from './profileCard'
import Inbox from './Inbox'
import Mypatients from './Mypatients'
import styles from "./mycss.module.css"
import axios from "axios"
import Navbar from '../components/Navbar'
import NavbarGiver from '../components/NavbarGiver'
import { useLocation , useNavigate} from 'react-router-dom';

/**
 * * what i have to do now , make the page of check a profile ready
 * * what should i give to that fucking page ? ( i can use the parameters
 * * to and fetch the data accroding to what's in the link ?
 * *
 * *
 * *
 */


function LoggedinTaker() {
    const location = useLocation();
    
/**
 * !variables
 */

const user = localStorage.getItem("thisuser")
const [doctors , setDoctors] = useState({})
const [isLoading, setIsLoading] = useState(true); 





    
    /**
     * !hooks
    */
    
    
        useEffect(() => {
            const docsFunction = axios.get("profile/MyCareGiversView/",  {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem("authToken")}`
              }
            }).then( res => {
                setDoctors(res.data)}
            )}, [])
        
   









        //********************/

        useEffect(() => {
            if (Object.keys(doctors).length > 0) {
               
                setIsLoading(false)
            }
          }, [doctors]);

        //*******************/





































/**
 * !functions
 */
function extractSellers(listofsellers){
    const extract = []
    listofpatients.map( user =>{
        extract.push(user.seller.user)
       
    }
    )
return extract

}









  return ( 
    <>
    { isLoading ?  <h1>loading the caregivers</h1>
    :

    <div id={styles.loggedin}>

        <NavbarTaker></NavbarTaker>






{/* here begins the bigges contianre the violet one  */}
        <div className={styles.violet}>






{/* here starts the left container blue*/}
        <div className={styles.blue}>


            <h1> your profile </h1>
            <ProfileCard user = {user}></ProfileCard>
            

        </div>
{/* here ends the left container the blue  */}




{/* here begins the right contiainer the green  */}
    <div className={styles.green}>

            <Mypatients Users={(extractClients(doctors))}  type={"CareGivers"}></Mypatients>
            <Inbox messages ={messages}></Inbox>










    </div>
    {/* here engs the right contianre the green one  */}





        
           


        </div> 
        {/* here finished the container of all the violet . */}


    </div>
    // here ends the contianre of the page the red
}
</>
  )
}

export default LoggedinTaker