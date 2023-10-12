import React, { useState , useEffect } from 'react'
import { useSharedData } from '../context/context' ;
import { useCustomNavigate } from '../pages/reducers/common';


function ReceivedMessages({changeConvo}) {
  const [ready , setReady] = useState(false)

  const [navigateToProfile , navigateToChat] = useCustomNavigate() ;
  const {convos , getRole  , fillConvos} = useSharedData()
  const role = getRole() ;
//! decomment the url of the image .
  const ChatBox = ({convo , role})=>{
    function handleProfile(e  , id){
      e.stopPropagation()
      navigateToProfile(id)
    }
    function handleChat(e , chatId){
      if (!changeConvo) 
navigateToChat(chatId)
else{
  changeConvo(chatId)
}
    }

   
    return (
      <div className="profile drow  "
      >
      <img src="face.png" alt="profile.png" />
      {/* <img src="convo.other_person_name.profile_picture" alt="profile.png" /> */}
          <div className="col full"
          onClick={e=> handleChat(e ,  convo.id)}>
      <div className="name  drow-between">
        <p className="head pname cursor" onClick={ role =="seller" ?  e=> handleProfile(e , convo.theclient) :  e=> handleProfile(e ,convo.theseller ) }
        > {"convo.other_person_name.name"}</p>
        {/* <p className="minibold-sub myplaceholder">{"about one minute"}</p> */}
        
      </div>
        <p className="myplaceholder minibold-sub ">{ convo.last_message?.content}</p>
      
  

    </div>
    
  </div>
    )
  }

  
  useEffect(() => {
    fillConvos();
  }, []);


    //********************/
useEffect(() => {
  if (convos.length > 0 ) {
    setReady(true);
    console.log('convo after filling and true', convos)
  }
}, [convos]);

  return (
    <div className="clients col">
    {!changeConvo && <h1 className="containertitle">{"Received Messages : "}</h1>}

{ready && convos.map(convo => {
      return(<ChatBox convo={convo}  role={role}></ChatBox>)
    })}
    
  </div>
  
  
  )
}

export default ReceivedMessages