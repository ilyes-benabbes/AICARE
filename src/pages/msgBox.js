import React from 'react'
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import "./inbox.css" ; 
import { useNavigate  } from "react-router-dom";



function YourClients({Users , convoIds}) {
    
    const navigate = useNavigate();

/**
 * ! funciton : 
 */
function handleProfile(e){
    const keyAttribute = e.currentTarget.getAttribute("user");
    console.log("Clicked on check contract or chat - key:", keyAttribute);
    
}

function handleChat(e){
    const keyAttribute = e.currentTarget.getAttribute("chat");
    navigate("/chat" , { state: convoIds[keyAttribute]} )
    
}






    console.log(convoIds)
    console.log("users of your client s")
  return (<>
    
    {/* <h1>My Inbox</h1> */}
    <div className=" alpha testA d-flex flex-row col-12  align-items-start gap-2 p-2 " >



{
  Users.map(user =>(

    

<div className='d-flex flex-column align-items-center justify-content-center p-1 gap-2 test col-6'>

<div className='d-flex flex-column align-items-center justify-content-center p-1 gap-2'>

    <img className='w-75 h-10' src={"human.png"}> 
    
    </img>

    <p className='titre'>{user.client.user.email}</p>


</div>



{/* down myst cotanitn two buttons */}
<div className='d-flex flex-row  justify-content-center col-12 gap-2 '>

    <div className='d-flex flex-row align-items-center justify-content-center btn  mild p-1 col-5 '>

    <div className='title  align-self  ' >check contract</div>
    <img src='ctr.svg' className='col-2 '></img>


    </div>


    <div className='d-flex flex-row  btn  mild p-1 align-items-center justify- content-center col-5'
    user={user.client.user.id}
    onClick={handleProfile}
    
    >

    <div className='title text-center flex-grow-1 align-items-center justify-content-center ' >check profile</div>
    <img src='myaccount.svg' className='col-2  '></img>
    {/* <img src='ctr.svg' className='col-2 test'></img> */}


    </div>




</div>
{/* end of two buttons */}


<div className='d-flex flex-row align-items-center justify-content-center col-11 fort btn '
 chat = "2"
 onClick={handleChat}
>

<div className='titre text-white fs-8 ' >open chat</div>
    <img src='arr.svg' className='col-1 '></img>




</div>



</div>











  ))
}





























      

    











      
          














</div> 
</>

  );
}

export default YourClients