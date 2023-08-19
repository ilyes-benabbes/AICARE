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
import YourClients from './msgBox'
import Profile from './profile'
import "./log.css"

/**
 * * what i have to do now , make the page of check a profile ready
 * * what should i give to that fucking page ? ( i can use the parameters
 * * to and fetch the data accroding to what's in the link ? )
 * 
 * 
 * *
 * ! update the user Allset to true after logging in  
 * *
 */


function LoggedinCaregiver() {
    
/**
 * !variables
 */

const user = localStorage.getItem("thisuser")
const [patients , setPatients] = useState({})
const [convos , setConvos] = useState({})
const [isLoading, setIsLoading] = useState(true); 

var convoIds = {};





    
    /**
     * !hooks
    */
          //********************/
    
        useEffect(() => 
        {
 fetchData("profile/MyPatientsView/" , "get").then(data => {
                if (data) {
                  setPatients(data);
                }})
            }, [])
        
 
            //********************/
            

            useEffect(() => 
            {
     fetchData("messages/conversations" , "get").then(data => {
                    if (data) {
                        console.log(data)
                      setConvos(data)
                    }})
                }, [])















               //********************/
            

            useEffect(() => {
                if (Object.keys(patients).length > 0 && Object.keys(convos).length > 0) {

                     convos.map( (convo) => {
                        convoIds[convo.theclient] = convo.id
                        console.log("the convo :" , convoIds)

                    } )



                    
                    setIsLoading(false)
            }
          }, [patients]);

        //*******************/











                 
                //********************/
                //********************/
                //********************/


























/**
 * !functions
 */
function extractClients(listofpatients){
    console.log(listofpatients)
    const extract = []
    listofpatients.map( user =>{
        extract.push(user.client.user)
       
    }
    )
return extract

}

//-------------------
const fetchData = async (url , method) => {
    try {
      const response = await axios[method](url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem("authToken")}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };



function print(){
    console.log("patient :")
    console.log(patients)
    console.log("convos :")
    console.log(convos)
    console.log('convoIds', convoIds)
}









  return ( 
    <>
    { isLoading ?  <h1> loading </h1>
       
    :

    <div id={styles.loggedin}>

        <NavbarGiver></NavbarGiver>





{/* here begins the bigges contianre the violet one  */}
        <div className={styles.violet}>

        <button onClick={print}>print me </button>




{/* here starts the left container blue*/}
        <div className="blue ">


            <h1> your profile </h1>
            <Profile></Profile>
            {/* <ProfileCard user = {user}></ProfileCard> */}
            <h1>your certificats</h1>
            {/* <Cert certs={cert}></Cert> */}












        </div>
{/* here ends the left container the blue  */}




{/* here begins the right contiainer the green  */}
    <div className={styles.green}>
            <h1> your patients </h1>
            <YourClients Users = {patients} convoIds={convoIds}></YourClients>
          
            <Inbox ></Inbox>
            {/* <Mypatients Users={(extractClients(patients))} type={"inbox"}></Mypatients> */}
          










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

export default LoggedinCaregiver