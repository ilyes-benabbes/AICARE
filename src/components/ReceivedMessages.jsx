import React from 'react'
import { useSharedData } from '../context/context' ;
import { useCustomNavigate } from '../pages/reducers/common';


function ReceivedMessages() {
  const [navigateToProfile , navigateToChat] = useCustomNavigate() ;
  const {convos } = useSharedData()

  const ChatBox = ({convo})=>{
    function handleProfile(e  , id){
      e.stopPropagation()
      navigateToProfile(id)
    }
    function handleChat(e , chatId){
navigateToChat(chatId)
    }
    return (
      <div className="profile drow  "
      >
      <img src="face.png" alt="profile.png" />
          <div className="col full"
          onClick={e=> handleChat(e ,  convo.id)}>
      <div className="name  drow-between">
        <p className="head pname" onClick={  e=> handleProfile(e , )}
        > {"profile.email"}</p>
        <p className="minibold-sub myplaceholder">{"about one minute"}</p>
        
      </div>
        <p className="myplaceholder minibold-sub ">{"convo.last_message.content"}</p>
      
  

    </div>
    
  </div>
    )
  }

  return (
    <div className="clients col">
    <h1 className="containertitle">{"Received Messages : "}</h1>
    {convos.map(convo => {
      return(<ChatBox convo={convo}></ChatBox>)
    })}

    
  </div>
  
  
  )
}

export default ReceivedMessages