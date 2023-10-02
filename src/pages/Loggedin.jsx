import React, { useState } from "react";
import { useSharedData } from "../context/context";
import Layout from "./Layout";
import { useUser } from "./reducers/common";

/**
 * * what i have to do now , make the page of check a profile ready
 * * what should i give to that fucking page ? ( i can use the parameters
 * * to and fetch the data accroding to what's in the link ? )
 * *
 * ! update the user Allset to true after logging in
 * *
 */
export function Loggedin() {
  /**
   * !variables
   */

  //  const user = JSON.parse(localStorage.getItem("thisuser"))
  //* if user.common_info == seller or vice_verca.
  const [isLoading, setIsLoading] = useState(true);
  const { allAccounts, FillAccounts, Convos, FillConvos } = useSharedData();

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

  //! new desing
  function Card({ name, imgUrl }) {
    return (
      <div className={"clientcard col-center"}>
        <div className="imgcontainer">
          <img src="girl.jpg  " alt="girl" />
          {/* <img src={imgUrl} alt="girl" /> */}
        </div>
        <p className="cardFont">{name}</p>
        <button className="secondarybtn g1">
          <p>{"check contract"}</p>
          <img src="checkcontract.svg" alt="linkk"></img>
        </button>
        <button className="primarybtn g1">
          <p>{"open chat"}</p>
          <img src="rightarrow.svg" alt="linkk"></img>
        </button>
      </div>
    );
  }
  const user = useUser();

  return (
    <Layout isCaregiver={true} pageName={"Dashboard"}>
      <div className="dashboardPage">
        <div className="clients col">
          <h1 className="containertitle">{"Contractors : "}</h1>
          <div className="cardsrow  drow g2 myscroll">
            <Card name={"Marguritta Bastante"}></Card>
            <Card name={"Marguritta Bastante"}></Card>
            <Card name={"Marguritta Bastante"}></Card>
          </div>
        </div>

        <div className="inboxContainer"></div>
      </div>
    </Layout>
  );
}
