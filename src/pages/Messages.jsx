// import { Profile } from './profile';
import { useEffect, useState, useRef, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useWebSocket from 'react-use-websocket';
import React from "react";
import Navbar from "../components/Navbar";
import { Profile } from "../components/sub/Inboxprofile";
import { Message } from "../components/sub/Message";
import axios from "axios";
import Inbox from "./Inbox";
import { useSharedData } from "../context/context";
import Layout from "./Layout";
import { useUser, PostMsgApi } from "./reducers/common";
import ReceivedMessages from "../components/ReceivedMessages";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContractCreationPanel from "./ContractCreationPanel";
// import { socket } from './socket';
// import io from 'socket.io-client' ;
  // const url = `ws://127.0.0.1:8000/ws/conversation/31ba6a20-6d88-46d6-a3f3-96593c9f2a35/?token=617a47f4f3124215a0236565d4f63bece1739211`;

// const mySocket = io.connect("ws://127.0.0.1:8000/ws/conversation/31ba6a20-6d88-46d6-a3f3-96593c9f2a35/?token=617a47f4f3124215a0236565d4f63bece1739211`")
function chat() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "85%",
    marginTop: "30px",
    marginBottom: "30px",
    bgcolor: "background.paper",
    border: "2px solid purple",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };
  const location = useLocation();
  let convoId;
  const [user, authToken] = useUser();
  const [convoid, setconvoid] = useState(location.state);
  // const url = `ws://localhost:8000/ws/conversation/${convoid}/?token=${authToken}`;
  // const userToken = "617a47f4f3124215a0236565d4f63bece1739211"; // Replace with the actual user token
  // const urlgen = `ws://127.0.0.1:8000/ws/conversation/31ba6a20-6d88-46d6-a3f3-96593c9f2a35/?token=617a47f4f3124215a0236565d4f63bece1739211`;
  const divRef = useRef(null);
  const inputref = useRef(null);
  const [convo, setConvo] = useState([]);
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  //  let url = `ws://127.0.0.1:8000/ws/conversation/${convoid}/?token=${authToken}`;
  const [Url , setUrl] = useState("ws://.")

  const postUrl = PostMsgApi + convoid + "/";
  const { convos, getRole } = useSharedData();
  var lastmsg = convo[convo.length - 1]?.sender;
  // console.log('lastmsg', lastmsg)
  const [chatterName, setChatterName] = useState("");
  const [chatterImg, setChatterImg] = useState("");
  const myid = user.basic_info.id;
  // alert(myid)
  // const [ws , setws] = useState(new WebSocket(url))
  const [ws, setws] = useState();
  const role = getRole();
  const [ready, setReady] = useState(false);
  const [panelShowed, setPanelShowed] = useState(false);
  let ws2 = new WebSocket(Url) ;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //********************/
  useEffect(() => {
    if (convos.length > 0) {
      setReady(true);
    }
  }, [convos]);

  useEffect(() => {
    if (location.state) {
      convoId = location.state;
      setconvoid(convoId);
    } else if (ready && convos.length > 0) {
      // alert("ready to get [0]")
      convoId = convos[0].id;
      setconvoid(convoId);
    }
  }, [ready]);

  // const url = 'ws://localhost:8000/ws/messages/2d4044fe-37bd-416d-8d86-d61b96eaedc1/?token=5bf0ef9628d2745a0fbdd5f839ed681f2a1af86e';

  useEffect(() => {
    if (convoid)
    // alert(convoid)
  {
 let url = `ws://127.0.0.1:8000/ws/conversation/${convoid}/?token=${authToken}`;
 setUrl(url)
  }
   
  }, [convoid])

  useEffect(() => {
    console.log('ws changed ', ws  )
    console.log('ws', ws)
    
      console.log('convoid', convoid)
      console.log("yay double end ")
      // alert(Url)
      // if (convoid)
      ws2 = new WebSocket(Url)

      // setws(new WebSocket(urlgen)); U
     
      console.log('Url', Url)


    
       
        console.log('ws2 after affectign new url value above', ws2)

        // ws.onerror = (event) => {
        //   console.log("error message:", event);
        // };

        ws2.onopen = () => {
          console.log("WebSocket connection  2 opened");
          // alert("oppened")
          // document.querySelector('#status').textContent = 'Connected';
        };
        ws2.onopen = () => {
          console.log("WebSocket connection opened");
          // alert("oppened")
          // document.querySelector('#status').textContent = 'Connected';
        };

        ws2.onmessage = (event) => {
          // alert(event.data)
          console.log("Received message:", event.data);
          console.log("event.data.message", JSON.parse(event.data).message);
          const newMsg = JSON.parse(event.data).message;
          console.log("newMsg", newMsg);
          if (newMsg)
          {
            setConvo((prevConvo) => [...prevConvo, newMsg]);
            // alert("setting a convos")
          // alert("setting a convos")
          }
      };
      
      ws2.onclose = (err) => {
        // alert("closed");
        console.log("ErrCls", err);
      }
    
    
  }, [Url]);


 
    

  // alert(convoid)
  function findChatter(convoid) {
    // console.log('convos', convos)
    const foundConvo = convos.find((convo) => convo.id == convoid);
    // console.log('foundConvo', foundConvo)
    setChatterName(foundConvo.other_person_name.name);
    // console.log('chatterName', chatterName)
    setChatterImg(foundConvo.other_person_name.profile_picture);
    // console.log('chatterImg', chatterImg)
  }

  //! hooks :

  useEffect(() => {
    fetchData(postUrl, "get").then((data) => {
      if (data) {
        setConvo(data);
        findChatter(convoid);
      }
    });
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
        setMessage("");
      }
    }
  };

  //************** */
  const fetchData = async (url, method) => {
    try {
      const response = await axios[method](url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${authToken}`,
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
      content: message,
    };
    setMessage("");
 
    const messageToSend = {
      type: "text", // Replace with the appropriate message type
      content: message,
    };

    console.log('ws2', ws2)
    console.log("before sending ")
    ws2.send(JSON.stringify(messageToSend));
    // ws.send(JSON.stringify({ 'message':message , }));
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
          Authorization: `Token ${authToken}`,
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
    // console.log("allAccount", allAccounts);
    // console.log("i am now filling the data over by a simple call");
    FillAccounts();
  }
  //************* */
  function handleConvo(newConvo) {
    setconvoid(newConvo);
    // findChatter(newConvo)

    // console.log("button click");
    // console.log('ws', ws)
    //!!!! last stop here , ce qui rest pour finir la prochiane vez es que tengo que fixar el websocket , y despues ich muste cambiar el designo and das is all
  }

  //************* */
  function handleContractCreation(e) {
    setPanelShowed(true);
    setOpen(true);
  }
  return (
    <>
      <Layout isCaregiver={true} pageName={"Messages"}>
        <div className="drow page">
          {/* here begins he chat window */}
          <div className="chat  col">
            <div className="menu drow-between ">
              <div className="drow leftmenu">
                <img src="girl.jpg" alt="sender" />
                <div className="col onlineBox">
                  <p className="minibold">{chatterName}</p>
                  <div className="drow online g1">
                    <img src="online.svg" className="smalli" alt="" />
                    <p className="myplaceholder">{"online"}</p>
                  </div>
                </div>
              </div>

              {role == "seller" && (
                <button className="callbtn drow g1">
                  {/* <img src="call.svg" alt="call" className="i" /> */}
                  <p
                    className="minibold"
                    onClick={(e) => handleContractCreation(e)}
                  >
                    {"create contract"}
                  </p>
                </button>
              )}

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    component="h2"
                    textAlign={"center"}
                    fontWeight={400}
                  >
                    {"Please fill the form to create your contracts :"}
                  </Typography>
                  <Box
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      border: "solid green",
                      height: "70vh",
                      overflowY: "auto",
                    }}
                    classname="modalStep"
                  >
                    <div className=" col g1">
                      <ContractCreationPanel></ContractCreationPanel>
                    </div>
                  </Box>
                </Box>
              </Modal>
            </div>

            <div className="chatbox col g3 myscroll grow  ">
              {ready &&
                convo.map((msg, index) => {
                  let isnew = lastmsg != msg.sender;
                  // console.log('msg', msg)
                  // console.log('msg.sender', msg.sender)
                  // console.log('myid', myid)
                  // console.log('myid', myid)
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
          {/* here end the left chat winodw */}

          <div className="col messagesPanel ">
            <div className="mymessages drow-center full g1 ">
              <p className="head"> Messages </p>
              <img src="darr.svg" alt="downArrow" className="i" />
              <p className="head">{convos.length}</p>
            </div>

            {/* <div className="search drow-center minibold">
            <p className="">Search</p>
          </div> */}

            <div className="profiles col ">
              <ReceivedMessages changeConvo={handleConvo}></ReceivedMessages>
              {/* {convos.map((convo) => {

              return (
                <Profile
                  convo={convo}
                  handleChat={handleclick}
                  handleProfile={handleProfile}
                ></Profile>
              );
            })} */}
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
