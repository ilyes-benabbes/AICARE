import React, { useState , useEffect , useReducer} from 'react'
import Cert from './Cert'
// import ProfileCard from './profileCard'
import Inbox from './Inbox'
import Contract from './Contract'
import styles from "./mycss.module.css"
import axios from "axios"
import Navbar from '../components/Navbar'
import NavbarGiver from '../components/NavbarGiver'
import { useLocation , useNavigate} from 'react-router-dom';
import Clients from './clientsbox'
import Profile from './profile'
import "./log.css" ;
import { Profile_chat_context } from './contexts/context'
// import convos_Reducer from './reducers/patients_convos_reducer'

import { useSharedData } from '../context/context';

/**
 * * what i have to do now , make the page of check a profile ready
 * * what should i give to that fucking page ? ( i can use the parameters
 * * to and fetch the data accroding to what's in the link ? )
 * *
 * ! update the user Allset to true after logging in  
 * *
 */
function LoggedinCaregiver() {
  const { allAccounts, setAllAccounts , FillAccounts , Convos , setconvos , FillConvos} = useSharedData() ;
/**
 * !variables
 */

const user = JSON.parse(localStorage.getItem("thisuser"))
// const [clients , setclients] = useState({ })
// const [convos , setConvos] = useState({})
// const [reducerConvo , dispatch] = useReducer (convos_Reducer , {})
var convoIds = {};

const [isLoading, setIsLoading] = useState(true); 

//! context variables : 
// const {allAccounts , setAllAccounts}   =useSharedData()

    /**
     * !hooks
    */

//********************/
    
//  fetchData("/api/profile/MyPatientsView/" , "get").then(data => {
//                 if (data) {
//                   setclients(data);

//                 }})
//********************/
           

//*************** this is it  : */
            useEffect(() => {
          console.log("allAccounts has changes"); 
          if (allAccounts.length > 0 && Convos.length > 0) {
            console.log("isloading is now false")
            console.log('allAccounts', allAccounts)
            console.log('convos', Convos)
            setIsLoading(false)
          }
        } , [allAccounts , Convos]) ;  

        useEffect(() => 
        {
          FillConvos()
        }, []) ;

        useEffect(() => 
        {
        //  setclients( FillAccounts())
        console.log("filling")
         console.log(FillAccounts())
          // setclients(allAccounts)
// const [clients , setclients] = useState(allAccounts)

        }, [])
        
        // if (data) {
          //  fetchData("/api/messages/conversations/" , "get").then(data => {
                    //   setConvos(data)
                    // }})
//********************/         
           
    // useEffect(() => {
    //   console.log('we are done')
    //             if (Object.keys(clients).length > 0 ) {
    //                 //( (convo) => { convoIds[convo.theclient] = convo.id ; 
    //                 //   } )
    //               setIsLoading(false)
    //         }
    //       }, [clients]);

        //*******************/

/**
 * !functions
 */
//****************** */
const func = function myparentfunction(x){
console.log("yay i printed what my father told me to print")
  console.log(x)
}
//****************** */
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

function print(e){
  e.preventDefault()
    // console.log("patient :")
    // console.log(clients)
    // console.log("convos :")
    // console.log(convos)
    // console.log('convoIds', convoIds)
    // console.log("this is the Allacount before")
    // console.log('allacount ', allAccount)
    setAllAccounts(" form this click on , the new ala acoutbn is cleopatre on print ")
}
function printhaha(e){
  e.preventDefault()
    // console.log("patient :")
    // console.log(clients)
    // console.log("convos :")
    // console.log(convos)
    // console.log('convoIds', convoIds)
    // console.log("this is the Allacount before")
    // console.log('allacount ', allAccount)
    setAllAccounts(" haha")
}
function printdata(e){
  e.preventDefault()
    // console.log("patient :")
    // console.log(clients)
    // console.log("convos :")
    // console.log(convos)
    // console.log('convoIds', convoIds)
    // console.log("this is the Allacount before")
    // console.log('allacount ', allAccount)
    // setAllAccount(" haha")
    console.log(allAccounts)
    console.log("convos" , Convos)
}



  return ( 
    <>
   

    <div id={styles.loggedin}>
            <Profile_chat_context.Provider value={{Convos , allAccounts}} >

        {/* <NavbarGiver></NavbarGiver> */}





{/* here begins the bigges contianre the violet one  */}
        <div className={styles.violet}>





{/* here starts the left container blue*/}
        <div className="blue ">


            <h1> your profile </h1>
            <Profile user = {...user}></Profile>

            {/* <ProfileCard user = {user}></ProfileCard> */}

          
             
            {/* <h1>your certificats</h1> */}
            {/* <Cert ></Cert> */}








            {/* <Inbox ></Inbox> */}




        </div>
{/* here ends the left container the blue  */}



{/* here begins the right contiainer the green  */}
     <div className={styles.green}>
             {/* <h1 className='sectionfont'> your patients </h1> */}
          
             { ! isLoading && <Clients ></Clients> }

            <button onClick={print}>affect </button>
            <button onClick={printhaha}>print haha</button>
            <button onClick={printdata}>print data</button>

             <h1 >Messages</h1>
             <div className=" d-flex flex-column p-2 gap-2 alpha h-25 testB">
            { ! isLoading && <Inbox ></Inbox>}
              </div>










    </div> 
    {/* here engs the right contianre the green one  */}





        
           


        </div> 
        {/* here finished the container of all the violet . */}

            </Profile_chat_context.Provider>
    </div>
    // here ends the contianre of the page the red

</>
  )
}

export default LoggedinCaregiver