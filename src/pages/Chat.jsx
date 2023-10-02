import { useEffect, useState, useRef } from "react";
import "./chat.css";
import Inbox from "./Inbox";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LoginPage from "./LoginPage";

function Chat() {
  const [username, setUsername] = useState("username");
  const [convo, setConvo] = useState([]);
  const [message, setMessage] = useState("");
  let online = true;
  const location = useLocation();
  // const convoId = location.state;
  const convoId = "2365199a-f2c5-4609-a888-4da584ba15f9";
  const [isLoading, setIsLoading] = useState(true);
  const user = { uid: 52 };
  const userToken = "67782dea16133fe513226e5853ee8b3ec935ff37"; // Replace with the actual user token
  const roomName = "2365199a-f2c5-4609-a888-4da584ba15f9";
  //    const ref = useRef<HTMLDivElement>(null);

  const mref = useRef();

  const divRef = useRef(null);

  // function scrollToBottom() {
  //   // const elem =

  //   divRef.current.scrollIntoView();
  // }

  /**
   * ?? the plan goes like this :
   * ? the user post a message using the post normally , i add it to the fucking state
   * ? when it receives a message i added it to the convo and that's it .
   * ! the seller is 18 , i have to provide the userId : 52 that's it the sender .
   * ! tell slimant to remove the field of the receiver because it has no sens and i don't have its value .
   */

  /**
   * * last stop is trying to fix the auto scroll
   */
  async function login (){
  
    const json =  {"email":"ils1155s1yssefss4s456s@gmail.cz" , "password": "ilyes1"}
    const res = await axios.post("/dj-rest-auth/login/", json , {
      headers: {
        'Content-Type': 'application/json',
      }}).then(res => {console.log('res', res)})
      .catch(err => {
        console.log('err', err)
      })
  }

  /**
   *  ! hooks
   */

  useEffect(() => {
      login()
    fetchData("messages/conversations/" + `${convoId}/`, "get").then((data) => {
      if (data) {
        setConvo(data);
      }
    });
  }, []);

  // const socket = new WebSocket('ws://localhost:8000/ws/messages/2365199a-f2c5-4609-a888-4da584ba15f9/');
  const url = 'ws://localhost:8000/ws/messages/2d4044fe-37bd-416d-8d86-d61b96eaedc1/?token=5bf0ef9628d2745a0fbdd5f839ed681f2a1af86e';
  const ws = new WebSocket(url);
  function runSocket() {
    // const url = `ws://localhost:8000/ws/messages/${convoId}/?token=${userToken}`;
    // const ws = new WebSocket(url);
    //       ws.onopen = () => {
    //     console.log('WebSocket connection opened');
    //   };
    //   ws.onclose = (e) => {
    //     console.log(e)
    //   }
    //   ws.onmessage = (event) => {
    //     console.log('Received message:', JSON.parse(event.data));
    //     const recmsg = event.data;
    //   };
    //   ws.onerror = (event) => {
    //     console.log('error message:', event);
    //   };
  }

  useEffect(() => {
    console.log("on every rerender");
    if (mref.current) {
      console.log("finnaly");
      // mref.current.scrollIntoView()
      const element = document.getElementById("chatWindow");

      element.scrollTop = element.scrollHeight;
    }
  });

  useEffect(() => {
    console.log("heheheheheh ilyes is junk at coding ");
    if (Object.keys(convo).length > 0) {
      console.log("heheh ilyes is convo full but the element is : ");

      const element = document.getElementById("chatWindow");
      console.log(element);

      setIsLoading(false);
    }
  }, [convo]);

  /**
   * ! function :
   */

  function addmsg(e) {
    e.preventDefault();

    let msg = {
      sender: user.uid,
      // who the fuck is the receiver i have to get his Id .
      receiver: 2,
      content: message,
      conversation: convoId,
    };

    postData(`/messages/messages/${convoId}/`, JSON.stringify(msg))
      .then((res) => {
        setConvo((prevConvo) => [...prevConvo, msg]);
      })
      .catch((err) => {
        console.log(err);
        alert("error message could not be sent");
      });
  }

  /**
   * fucionti
   */

  function getdiv() {
    // e.preventDefault()
    console.log("mref", mref);
    const element = document.getElementById("chatWindow");
    console.log("ele", element);
    if (element.scrollHeight > element.clientHeight) {
      element.scrollTop = element.scrollHeight;
      // element.scrollTop = element.scrollHeight;
      // element.scrollIntoView({ behavior: 'smooth' });
      // The element is scrollable
      console.log("Element is scrollable");
    } else {
      // The element is not scrollable
      console.log("Element is not scrollable");
    }
  }

  /**
   * ! function socket :
   */
  runSocket();

  /**
   *
   * ! fin socket
   */

  function handleChange(e) {
    const { name, value } = e.target;
    setMessage((prevData) => value);
  }

  const fetchData = async (url, method) => {
    try {
      const response = await axios[method](url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("authToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    const element = document.getElementById("windowChat");
    if (element) {
    
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  

  const postData = async (url, json) => {
    try {
      const response = await axios.post(url, json, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("authToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  function print() {
    console.log("convo", convo);
    console.log("message", message);
    scrollToBottom();
  }

  /**
   * * componenet du message
   */
  const Message = ({ message }) => {
    return (
      <div
        className={`chat-bubble ${message.sender == user.uid ? "right" : ""}`}
      >
        <img
          className="chat-bubble__left"
          // src={message.avatar}
          alt="user avatar"
        />
        <div className="chat-bubble__right">
          <p className="user-name">{"ilyes"}</p>
          <p className="user-message">{message.content}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <h1> loading </h1>
      ) : (
        <div className="d-flex flex-column">
          <NavbarGiver></NavbarGiver>

          {/* <button onClick={print}>print</button> */}

          <div className="d-flex flex-row align-items-end justify-content-center gap-5 ">
            {/* here  begins the left div that has only the past chats*/}
            <div className="d-flex flex-column  col-4 align-self-stretch ">
              <Inbox></Inbox>
            </div>
            <button onClick={getdiv}>click me </button>
            {/* here  ends the left div that has only the past chats*/}

            {/* here begin the right side  */}

            <div className="d-flex flex-column  col-5  justify-content-center  ilyes ">
              <div className="d-flex flex-row testl align-items-center gap-2 mini">
                <img src="/human.png" alt="oh not" className="col-1 img"></img>

                <div className="d-flex flex-column online ">
                  <p className="user-name"> bennabbes ilyes</p>
                  {online ? (
                    <img src="online.svg" className="col-2"></img>
                  ) : (
                    <p1> offline</p1>
                  )}
                </div>
              </div>
              {/* here ends the first part */}

              {/*  there begins the moufid kamel li fih chat bubbles */}

              <div className="d-flex flex-column" id="chatWindow" ref={mref}>
                {convo.map((msg) => (
                  <Message message={msg}></Message>
                ))}

                {/* <h1 className="n">{"g"}</h1> */}

                <div ref={divRef} className="jkljl" id="H"></div>
            
              </div>

              {/* here ends all the chat bubbles */}

              <div className=" d-flex flex-row align-items-center justify-content-center sendM ">
                <div className="testr row col-3  Neon Neon-theme-dragdropbox">
                  <a className="Neon-input-choose-btn blue w-100 ">
                    {" "}
                    upload file
                  </a>

                  <input
                    style={{
                      zIndex: 999,
                      opacity: 0,
                      position: "absolute",
                      border: "solid black 2px",
                      width: "100%",
                      //   height: '20px',

                      right: "0px",
                      left: "0px",
                      marginRight: "auto",
                      marginLeft: "auto",
                    }}
                    className="col-1"
                    name="files[]"
                    id="filer_input2"
                    multiple="multiple"
                    type="file"
                  />
                </div>

                {/* <input type="file" name="file" id="file"  /> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter message"
                  onChange={handleChange}
                ></input>
                <button className="btn btn-success" onClick={addmsg}>
                  send
                </button>
              </div>
            </div>
            {/* here ends the right div that has three sub div  */}
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
