import React from "react";
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Contract from "./Contract";
import "./inbox.css";
import { useNavigate } from "react-router-dom";

import { useContext ,  } from 'react';
import { useSharedData } from "../context/context";



function Clients() {
  // const context = useContext(Profile_chat_context) ;
//! in the case of caregiver , else , we do context.sellers
const {allAccounts} = useSharedData()
const contracts = allAccounts



  const navigate = useNavigate();
  
  /**
   * ! funciton :
  */
 function handleProfile(e , profile) {
  e.preventDefault()
  // console.log("the id is this " , e)
  
  navigate("/profilepage", { state: profile });
  //  navigate("/profilepage")

  }

  function handleChat(e) {
    console.log('chat')
    alert("chat")
    // navigate("/chat", { state: [convoIds[keyAttribute], keyAttribute] });
  }
  function handleContract(e , contract) {
    console.log('contract') ;
    console.log('contract', contract)
  navigate("/contract", { state: contract });

    // navigate("/chat", { state: [convoIds[keyAttribute], keyAttribute] });
  }

  return (
    <>
      <div className=" alpha myscroll testA d-flex flex-row col-12  align-items-start gap-2 p-2 ">
        {contracts.map((contract) => {

            const contractkey = Object.keys(contract)[0]
            const user = contract[contractkey].theclient 
          return(
          <div className="d-flex flex-column align-items-center justify-content-center p-1 gap-2 test col-6">
            <div className="d-flex flex-column align-items-center justify-content-center p-1 gap-2">
              <img className="w-75 h-10" src={"human.png"}></img>

              {/* <p className="titre">{user.client.user.email}</p> */}
              {/* //! make a condition here if client, get  user.theseller , if not user.theclient*/}
              <p className="titre">{user.email}</p>
            </div>

            {/* down myst contain two buttons */}
            <div className="d-flex flex-row  justify-content-center col-12 gap-2 ">
              <div className="d-flex flex-row align-items-center justify-content-center btn  border mild p-1 col-5 "
                onClick={ e => handleContract(e, contractkey) }
               >
                <div className="title  align-self  ">check contract</div>
                <img src="ctr.svg" className="col-2 "
                ></img>
              </div>

              <div
                className="d-flex flex-row  btn  mild p-1 align-items-center justify- content-center col-5"
                onClick={ e => handleProfile(e , user) }
              >
                <div className="title text-center flex-grow-1 align-items-center justify-content-center ">
                  check profile
                </div>
                <img src="myaccount.svg" className="col-2  "></img>
                {/* <img src='ctr.svg' className='col-2 test'></img> */}
              </div>
            </div>
            {/* end of two buttons */}

            <div
              className="d-flex border flex-row align-items-center justify-content-center col-11 fort btn "
              chat="2"
              onClick={handleChat}
            >
              <div className="titre text-white fs-8 " >open chat</div>
              <img src="arr.svg" className="col-1 "></img>
            </div>
          </div>
          )
        }
        )
        }
      </div>
    </>
  );
}

export default Clients;
