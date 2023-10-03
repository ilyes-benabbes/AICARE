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
//???????????
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
  const [user] = useUser();
  const role = user.basic_info.role

  return (
    <Layout isCaregiver={role == "seller"} pageName={"Dashboard"}>
      <div className="dashboardPage g1 col">

       <ClientsDeck></ClientsDeck>
       <ReceivedMessages></ReceivedMessages>
      </div>
    </Layout>
  );
}

export default Loggedin;
