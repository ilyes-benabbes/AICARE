// import { Profile } from './profile';
import { useEffect, useState, useRef, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import React from "react";
import Navbar from "../components/Navbar";
import { Profile } from "../components/sub/Inboxprofile";
import { Message } from "../components/sub/Message";
import axios from "axios";
import Inbox from "./Inbox";
import { useSharedData } from "../context/context";
import Layout from "./Layout";
import { useUser } from "./reducers/common";


function chat() {

  /**
   * ! variables :
   */

  
  const location = useLocation();
  const convoId = location.state;
  const [ user , authToken] = useUser()
  const [convoid, setconvoid] = useState(convoId);
  const divRef = useRef(null);
  const inputref = useRef(null);
  const [convo, setConvo] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const userToken = "617a47f4f3124215a0236565d4f63bece1739211"; // Replace with the actual user token
  let online = true;
  const url = `ws://localhost:8000/ws/messages/${convoid}/?token=${userToken}`;
  const { convos } = useSharedData();



  const [ws , setws] = useState(new WebSocket(url))

  //! fix this later honey
  var lastmsg = 2;

  // const myid = user.basic_info.id; //! njibha from local storage easy tool . to put it in the send . the receiver he does its fucking job i don't really care
  const myid = 55; //! njibha from local storage easy tool . to put it in the send . the receiver he does its fucking job i don't really care
  // alert(myid)

//! websoket : 
//! websocket shit 
// const url = 'ws://localhost:8000/ws/messages/2d4044fe-37bd-416d-8d86-d61b96eaedc1/?token=5bf0ef9628d2745a0fbdd5f839ed681f2a1af86e';

useEffect(() => {
  // const socket = new WebSocket('wss://example.com/ws');
  setws ( new WebSocket(url));
  
ws.onerror = (event) => {
  console.log('error message:', event);
};

ws.onopen = () => {
  console.log('WebSocket connection opened');
  // document.querySelector('#status').textContent = 'Connected';
};

ws.onmessage = (event) => {
  console.log('Received message:', event.data);
  // const li = document.createElement('li');
  // li.textContent = event.data;
  // document.querySelector('#messages').appendChild(li);
};

ws.onclose = () => {
  console.log('WebSocket connection closed but why ');
  // document.querySelector('#status').textContent = 'Disconnected';
};
  
  // Handle WebSocket events here (e.g., socket.onmessage, socket.onclose, etc.)

  // Cleanup the WebSocket when the component unmounts
  return () => {
    ws.close();
  };
}, [convoid]);



  //! hooks :

  useEffect(() => {
    fetchData("/api/messages/conversation/" + `${convoid}/`, "get").then(
      (data) => {
        if (data) {
          setConvo(data);
          console.log('data', data)
        }
      }
    );
  }, [convoid]);

  //************** */

  useEffect(() => {
    const element = document.getElementById("scrolldiv");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView();
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

    // postData(`api/messages/messages/${convoId}/`, JSON.stringify(msg))
    //   .then((res) => {
    //     setConvo((prevConvo) => [...prevConvo, msg]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("error message could not be sent");
    //   });

    ws.send(JSON.stringify({
      'type': 'message',
      'message':message,
      'receiver' : "2",
      'sender' : "52"
     }));
  
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
    // setconvoid(newConvo);
    console.log("button click");
    console.log('ws', ws)
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
 <Layout isCaregiver={true} pageName={"Messages"}>
      <div className="drow page">
    
      <div className="chat  col">
          <div className="menu drow-between ">
            <div className="drow leftmenu  ">
              <img src="girl.jpg" alt="sender" />
              <div className="col ">
                <p className="minibold">moreigno guar</p>
                <div className="drow online g1">
                  <img src="online.svg" className="smalli" alt="" />
                  <p className="myplaceholder">online</p>
                </div>
              </div>
            </div>

            <button className="callbtn drow g1">
              {/* <img src="call.svg" alt="call" className="i" /> */}
              <p className="minibold">{"create contract"}</p>
            </button>
          </div>

          <div className="chatbox col g3 myscroll grow  ">
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
            <div className="input-box drow-between grow g2 ">
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


      
        <div className="col messagesPanel ">
          <div className="mymessages drow-center full g1 ">
            <p className="head"> Messages </p>
            <img src="darr.svg" alt="downArrow" className="i" />
            <p className="head">12</p>
          </div>

          {/* <div className="search drow-center minibold">
            <p className="">Search</p>
          </div> */}

          <div className="profiles col ">
 
            {convos.map((convo) => {
              return (
                <Profile
                  convo={convo}
                  handleChat={handleclick}
                  handleProfile={handleProfile}
                ></Profile>
              );
            })}

            {/* <button onClick={handleclick}>click me</button> */}
            {/* <Profile onClick={handleclick}></Profile> */}
            {/* one profile above  */}
          </div>
        </div>

       
        
      </div>
    </Layout>



        {/* here ends the chat */}

       
        {/* here ends the directory */}
      
    </>
  );
}

export default chat;
