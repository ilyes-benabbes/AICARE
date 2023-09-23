import React from "react";
import { useReducer } from "react";
export function Profile({ convo , handleChat , handleProfile}) {



  function handlealertState(newState){
    dispatch({
        type: 'alerted',
      });
}


function handleGetState(){
    dispatch({
        type: 'gotten',      
      });
}

  return <div className="profile drow border"
  onClick={(e) => {handleChat(convo.id)}}
  >
          <img src="face.png" alt="profile.png" />
              <div className="col  full">
          <div className="name  drow-between">
            <p className="head pname"
           onClick={ e => {handleProfile(e , convo.theclient)}}
            
            > {"profile.email"}</p>
            
            <p className="minibold-sub myplaceholder">12m</p>
          </div>
            <p className="myplaceholder minibold-sub ">{"profile.last_message"} </p>
            {/* <button className="btnprimary"
            onClick={handlealertState}
            > dispatch alert</button>
            <button className="btnprimary"
            onClick={handleGetState}
            > dispatch get</button> */}
          
          </div>
          </div>;
}
  