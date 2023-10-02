import React from 'react'
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { useContext ,  } from 'react';
import { Profile_chat_context } from './contexts/context'
import { useNavigate } from 'react-router-dom';

import "./inbox.css"
import { useSharedData  , useHandleProfile} from '../context/context';

function Inbox() {
  const navigate = useNavigate() 

  // const context = useContext(Profile_chat_context) ;
  const { allAccounts,  Convos } = useSharedData()
  //! if it is out of the fucking context , which data do i fucking need z3ma ( profileId , chatId so i can render the fucking thing)
  //! 
  // console.log('invox Context', context)
  const convos = Convos

  function handleProfile(e , client) {
    // const keyAttribute = e.currentTarget.getAttribute("user");
    // alert("on profile too ?? 
    // console.log("Clicked on profileclient:", clientId);
    useHandleProfile(client)
  }

  function handleChat( e ,convoid ) {
    // alert("wtf")
    console.log('convoid', convoid)
    // const keyAttribute = e.currentTarget.getAttribute("chat");
    // console.log('keyAttribute', keyAttribute)
    navigate("/mychat", { state: convoid });
  }

  return (<>
            {convos.map((convo , index) => (

<div className=" d-flex flex-row  justify-content-between w-100 test">
<div className="   d-flex flex-row">
  <div className={styles2.imagemypatien}>
    <img src="/human.png" alt="Profile" className={styles2.image} />
  </div>
  <div className={styles2.msg}>
  <p className='titre'>{"patient name here"}</p>
  <p className='title'>{convo.last_message?.content}</p>
  {/* *! do not forget to limit the message size to 600 characters max i think */}
  </div>
</div>
<div className="d-flex flex-row justify-content-between">

<div className='d-flex flex-row  btn  mild p-1 align-items-center justify- content-center col-5'>
<div className='title text-center flex-grow-1 align-items-center justify-content-center ' onClick={ e => {handleProfile(e , convo.theclient)}} >check profile</div>
<img src='myaccount.svg' className='icon'></img>
</div>
<div className='d-flex flex-row  btn  mild p-1 align-items-center justify-content-stretch align-content-stretch col-5'>
<div className='title text-center align-items-center justify-content-center ' onClick={(e) => {handleChat(e, convo.id)}}>open chat</div>
<img src='arrow-ios-forward.svg' className='icon'></img>
</div>
</div>
</div> 

            )
            
            )
            
            }
  
     




  
</>

  );
}

export default Inbox