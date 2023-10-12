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
import { useUser  , PostMsgApi} from "./reducers/common";
import ReceivedMessages from "../components/ReceivedMessages";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContractCreationPanel from "./ContractCreationPanel";




function chat() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height : "85%" ,
    marginTop : "30px" ,
    marginBottom : "30px" ,
    bgcolor: 'background.paper',
    border: '2px solid purple',
    borderRadius : 5 ,
    boxShadow: 24,
    p: 4,
  };
  const location = useLocation();
  let convoId  ;
  const [user , authToken] = useUser();
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
  const postUrl = PostMsgApi + convoid +"/"
  const { convos ,getRole} = useSharedData();
  var lastmsg = 2;
  const [ chatterName , setChatterName] = useState("")
  const [ chatterImg , setChatterImg] = useState("")
  const myid = user.basic_info.id; 
  const [ws , setws] = useState(new WebSocket(url))
  const role = getRole()
  const [ready , setReady] = useState(false)
  const [panelShowed , setPanelShowed] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  //********************/
useEffect(() => {
if (convos.length > 0 ) {
  setReady(true);
}
}, [convos]); 

useEffect(() => {
  if (location.state)
  { 
    convoId =  location.state
    setconvoid(convoId)
  }
  else if( ready && convos.length > 0) {
    // alert("ready to get [0]")
    convoId = convos[0].id
    setconvoid(convoId)
  } 

}, [ready])


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

function findChatter(convoid){
  console.log('convos', convos)
    const foundConvo = convos.find((convo) => convo.id == convoid );
    console.log('foundConvo', foundConvo)
    setChatterName(foundConvo.other_person_name.name)
    // console.log('chatterName', chatterName)
    setChatterImg(foundConvo.other_person_name.profile_picture)
    // console.log('chatterImg', chatterImg)
  }

  //! hooks :

  useEffect(() => {
    fetchData(postUrl, "get").then(
      (data) => {
        if (data) {
          setConvo(data);
          console.log('data', data)
          console.log('convoid', convoid)
          console.log("under findh chatt")
          findChatter(convoid)

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
      content: message,
    };
    setMessage("")
    // postData(postUrl , msg) ;

    postData(postUrl, msg)
    .then((res) => {
      setConvo((prevConvo) => [...prevConvo, msg]);
    })
    .catch((err) => {
      console.log(err);
      alert("error message could not be sent");
    });
    setConvo()
    // ws.send(JSON.stringify({
    //   'type': 'message',
    //   'message':message,
    //   'receiver' : "2",
    //   'sender' : "52"
    //  }));
  
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
  function handleConvo(newConvo) {
    setconvoid(newConvo);
    // findChatter(newConvo)
    
    console.log("button click");
    console.log('ws', ws)
    //!!!! last stop here , ce qui rest pour finir la prochiane vez es que tengo que fixar el websocket , y despues ich muste cambiar el designo and das is all
  }
  
  //************* */
 function handleContractCreation(e){
        setPanelShowed(true)
        setOpen(true)

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

            { role == "seller" && <button className="callbtn drow g1">
              {/* <img src="call.svg" alt="call" className="i" /> */}
              <p className="minibold"
              onClick={e=>handleContractCreation(e)}
              >{"create contract"}</p>
            </button>}



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  component="h2" textAlign={"center"}
          fontWeight={400}>
            { "Please fill the form to create your contracts :"}
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2  , border :"solid green" , height : "70vh"  , overflowY : "auto"}} classname= "modalStep">
              <div className=' col g1'>
                <ContractCreationPanel></ContractCreationPanel>
                {/* <p className='sectionfontthin'>Price/hour</p> */}
                {/* <p>{contract.price_per_hour}</p> */}
                {/* <p className='sectionfontthin'>Total hours</p> */}
                {/* <p>{contract.total_hour}</p> */}
                {/* <p className='sectionfontthin'>Missed Hours</p> */}
                {/* <p>{contract.missed_hour}</p> */}
                
              </div>
          </Box>
        </Box>
      </Modal>

          </div>

          <div className="chatbox col g3 myscroll grow  ">
            { ready && convo.map((msg, index) => {
              let isnew = (lastmsg != msg.sender);
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
 
            <ReceivedMessages changeConvo = {handleConvo}></ReceivedMessages>
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
