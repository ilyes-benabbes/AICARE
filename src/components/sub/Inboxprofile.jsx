import React, { useState } from "react";
import { useReducer } from "react";
import convos_Reducer from "../../pages/reducers/patients_convos_reducer";
import { useCustomNavigate } from "../../pages/reducers/common";
export function Profile({ convo , handleChat , handleProfile , msg}) {

console.log("inside profile ")
console.log('convo', convo)
const [tasks, dispatch] = useReducer(
  convos_Reducer
);

const { navigateToProfile } = useCustomNavigate();

  function handlealertState(newState){
    dispatch({
        type: 'alerted',
      });
}

function handleGetState(user){
    dispatch({
        type: 'navigated',  
        profile : user    
      });
}

  return <div className="profile drow "
  onClick={(e) => {handleChat(convo.id)}}
  >
          <img src="girl.jpg" alt="profile.png" />
              <div className="col  full">
          <div className="name  drow-between">
            <p className="head pname"
           onClick={ e => {handleProfile(e , convo.theclient)}}
            
            > {"profile.email"}</p>
            
            <p className="minibold-sub myplaceholder">12m</p>
          </div>
            <p className="myplaceholder minibold-sub ">{msg} </p>         
          </div>
          </div>;
}
  
