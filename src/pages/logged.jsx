import React, { useState, useEffect, useRef } from "react";
import Cert from "./Cert";
import Inbox from "./Inbox";
import Contract from "./Contract";
import styles from "./mycss.module.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import ClientsDeck from "../components/ClientsDeck";
import { useLocation, useNavigate } from "react-router-dom";
import Clients from "./clientsbox";
import "./log.css";
import { Profile_chat_context } from "./contexts/context";
import { useSharedData } from "../context/context";
import LoggedNavbar from "../components/LoggedNavbar";
import Linkitem from "../components/sub/Linkitem";
//! new design
const isCaregiver = true;
import Sidebar from "../components/Sidebar";
import Layout from "./Layout";
import { useUser } from "./reducers/common";
import { convertLength } from "@mui/material/styles/cssUtils";
import { Profile } from "../components/sub/Inboxprofile";
import ReceivedMessages from "../components/ReceivedMessages";

/**
 * * what i have to do now , make the page of check a profile ready
 * * what should i give to that fucking page ? ( i can use the parameters
 * * to and fetch the data accroding to what's in the link ? )
 * *
 * ! update the user Allset to true after logging in
 * *
 */
function Loggedin() {
  /**
   * !variables
   */

  //  const user = JSON.parse(localStorage.getItem("thisuser"))
  //* if user.common_info == seller or vice_verca.
  const [isLoading, setIsLoading] = useState(true);
  const { allAccounts, FillAccounts, Convos, FillConvos } = useSharedData();
  
  //! new desing
  const cardsref = useRef();
  const [ showRightArrow , setShowRightArrow] = useState(false) 
  const [ showLeftArrow , setShowLeftArrow] = useState(false) 
  const user = useUser();
  //! to comment out
  // const [clients , setclients] = useState({ })
  // const [convos , setConvos] = useState({})
  // const [reducerConvo , dispatch] = useReducer (convos_Reducer , {})
  // import ProfileCard from './profileCard'
  // import convos_Reducer from './reducers/patients_convos_reducer'

  /**
   * !hooks
   */

  //*************** finished loading : */
  //   useEffect(() => {
  //   if (allAccounts.length > 0 && Convos.length > 0) {
  //     setIsLoading(false)
  //   }
  // } , [allAccounts , Convos]) ;

  // //********* fill convos */
  // useEffect(() =>
  // {
  //   FillConvos()
  //   alert("heh")
  // }, []) ;

  // //********* fill accounts */
  // useEffect(() =>
  // {
  //  FillAccounts()
  // }, [])

  //********************/

  /**
   * !function
   */

  //-------------------

  function print(e) {
    e.preventDefault();
    console.log("Convos :");
    console.log(Convos);
    console.log("allacount ", allAccounts);
  }
  function handleScroll(e) {
    e.preventDefault();
    const container = cardsref.current;
    const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      console.log("scroll")

      // Check if the user has reached the right end
      const isRightEnd = scrollLeft + clientWidth >= scrollWidth;
      const isLeftEnd = container.scrollLeft == 0 ;

      if (isRightEnd)
    {setShowLeftArrow(true)
        setShowRightArrow(false)
      }
      else{
        if ( isLeftEnd){
        setShowLeftArrow(false)
        setShowRightArrow(true)
      }else 
    {setShowLeftArrow(true)
    setShowLeftArrow(true)}}



    console.log(cardsref.current.scrollWidth);
    if (cardsref.current.scrollWidth > cardsref.current.clientWidth){
      console.log("scrollable")
    }
    console.log('container.clientWidth', cardsref.current.clientWidth)
    // console.log(e)
  }

  
  function handlescroll (direction ){
    console.log("first")
    const container = cardsref.current;
    if (direction == "left")
    container.scrollLeft -= 200; 
  else if (direction == "right")
  container.scrollLeft += 200; 
}



  return (
    <Layout isCaregiver={true} pageName={"Dashboard"}>
      <div className="dashboardPage g1 col">
       <ClientsDeck></ClientsDeck>
       <ReceivedMessages></ReceivedMessages>
      </div>
    </Layout>
  );
}

export default Loggedin;
