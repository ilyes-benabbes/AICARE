// import { Profile } from './profile';
import { useEffect, useState, useRef, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import React from "react";
import Navbar from "../components/Navbar";
import { Profile } from "../components/sub/profile";
import { Message } from "../components/sub/Message";
import axios from "axios";
import Inbox from "./Inbox";
import { useSharedData } from "../context/context";
function chat() {
  /**
   * ! variables :
   */

  const location = useLocation();
  const convoId = location.state;
  const [convoid, setconvoid] = useState(convoId);
  // const convoId = "2365199a-f2c5-4609-a888-4da584ba15f9";
  // console.log('thisconvo', thisconvo)
  const divRef = useRef(null);
  const inputref = useRef(null);
  const [convo, setConvo] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let online = true;
  //! fix this later honey
  var lastmsg = 2;

  const myid = 52; //! njibha from local storage easy tool . to put it in the send . the receiver he does its fucking job i don't really care
  const userToken = "617a47f4f3124215a0236565d4f63bece1739211"; // Replace with the actual user token

  //! contedxt
  // const {allAccount , setAllAccount}   =useSharedData() ;
  const { allAccounts, FillAccounts, Convos, FillConvos } = useSharedData();

  //! hooks :

  useEffect(() => {
    fetchData("/api/messages/conversations/" + `${convoid}/`, "get").then(
      (data) => {
        if (data) {
          setConvo(data);
        }
      }
    );
  }, [convoid]);

  //************** */

  useEffect(() => {
    const element = document.getElementById("scrolldiv");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [convo]);

  //! functions :

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addmsg(e);

      e.preventDefault(); // Prevent the Enter key from adding a new line
      if (message.trim() !== "") {
        setInputValue("");
      }
    }
  };

  //************** */

  const fetchData = async (url, method) => {
    try {
      const response = await axios[method](url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      }).catch((err) => {
        console.log("err", err);
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:in fetch data ", error);
      return null;
    }
  };

  //************** */

  function addmsg(e) {
    inputref.current.value = "";
    e.preventDefault();

    let msg = {
      sender: myid,
      receiver: 2,
      content: message,
      conversation: convoId,
    };

    postData(`api/messages/messages/${convoId}/`, JSON.stringify(msg))
      .then((res) => {
        setConvo((prevConvo) => [...prevConvo, msg]);
      })
      .catch((err) => {
        console.log(err);
        alert("error message could not be sent");
      });
  }

  //************** */

  function handleChange(e) {
    const { name, value } = e.target;
    setMessage((prevData) => value);
  }

  //************** */

  const postData = async (url, json) => {
    try {
      const response = await axios.post(url, json, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  //************** */

  function print() {
    // console.log("convo", convo);
    // console.log("message", message);
    console.log("allAccount", allAccounts);
    console.log("i am now filling the data over by a simple call");
    FillAccounts();
  }

  //************* */
  function handleclick(newConvo) {
    setconvoid(newConvo);
    console.log("button click");
    // console.log()
    //!!!! last stop here , ce qui rest pour finir la prochiane vez es que tengo que fixar el websocket , y despues ich muste cambiar el designo and das is all
    // navigate("/mychat", { state: "ab99c98e-8413-4684-a247-5a0331daa3ac" });
  }
  function handleProfile(e, clientId) {
    // const keyAttribute = e.currentTarget.getAttribute("user");
    // alert("on profile too ??
    console.log("Clicked on profileclient:", clientId);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="drow-center page">
        <div className="col messagesPanel f1 ">
          <div className="mymessages drow-center full g1 ">
            <p className="head"> Messages </p>
            <img src="darr.svg" alt="downArrow" className="i" />
            <p className="badge head">12</p>
          </div>

          <div className="search drow-center minibold">
            <p className="">Search</p>
          </div>

          <div className="profiles col ">
            {/* <Inbox></Inbox> */}
            {Convos.map((convo) => {
              return (
                <Profile
                  convo={convo}
                  handleChat={handleclick}
                  handleProfile={handleProfile}
                ></Profile>
              );
            })}

            {/* <button onClick={handleclick}>click me to go here agian </button> */}
            {/* <Profile onClick={handleclick}></Profile> */}
            {/* one profile above  */}
          </div>
        </div>

        {/* here ends the messages pannel  */}
        <div className="chat  f2 messages col">
          <div className="menu drow-between ">
            <div className="drow leftmenu  ">
              <img src="face.png" alt="sender" />
              <div className="col ">
                <p className="minibold">moreigno guar</p>
                <div className="drow online g1">
                  <img src="online.svg" className="smalli" alt="" />
                  <p className="myplaceholder">online</p>
                </div>
              </div>
            </div>

            <button className="callbtn drow g1">
              <img src="call.svg" alt="call" className="i" />
              <p className="minibold">call</p>
            </button>
          </div>

          <div className="chatbox  col g3 myscroll grow  ">
            {convo.map((msg, index) => {
              let isnew = lastmsg != msg.sender;
              lastmsg = msg.sender;
              return (
                <Message
                  key={msg.id}
                  msg={msg}
                  isme={msg.sender === myid}
                  isnew={index === 0 ? "true" : isnew}
                ></Message>
              );
            })}
            <div ref={divRef} id="scrolldiv"></div>
          </div>

          <div className="myinput drow " onKeyPress={handleKeyPress}>
            <input type="file" className="cursor hidden" id="file" />
            <label htmlFor="file" className="sendFile">
              <img src="file.svg" alt="" className="i cursor sendFile" />
            </label>
            <div className="input-box drow-between grow g2   ">
              {/* <label htmlFor="image"></label> */}
              <input
                type="text"
                key={"image"}
                className="grow "
                placeholder="Type something..."
                onChange={handleChange}
                ref={inputref}
              />

              <img
                src="sendm.svg"
                alt=" "
                onClick={addmsg}
                height={40}
                width={40}
              />
            </div>
          </div>
        </div>

        {/* here ends the chat */}

        <div className="directory f1   messages  col g2">
          <div className="drow-around dir">
            <p className="head">Directory</p>
            <img src="pts.svg" alt="" className="" />
          </div>

          <div className="clientsPanel col">
            <div className="PanelTitle drow g1">
              <p className="minibold">clients</p>
              <p className=" orange ">6</p>
            </div>

            <Profile></Profile>
            <button onClick={print}>click me</button>
          </div>
        </div>
        {/* here ends the directory */}
      </div>
    </>
  );
}

export default chat;
