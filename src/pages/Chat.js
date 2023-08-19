import {useEffect, useState} from "react";
import "./chat.css"
import Inbox from "./Inbox";
import { useLocation } from 'react-router-dom';
import NavbarGiver from "../components/NavbarGiver";
import axios from 'axios'

function Chat() {
    const [username, setUsername] = useState('username');
    const [convo, setConvo] = useState([]);
    const [message, setMessage] = useState('');
    let online = true
    const location = useLocation();
    const convoId = location.state;
    const [isLoading, setIsLoading] = useState(true); 
    const user = {uid : 52} ; 




    /**
     *  ! hooks 
     */
   

    useEffect(() => 
    {
fetchData("messages/conversations/"+`${convoId}` , "get").then(data => {
            if (data) {
              setConvo(data);
            }})
        }, [])




        // const socket = new WebSocket('ws://localhost:8000/ws/messages/2365199a-f2c5-4609-a888-4da584ba15f9/');



        const userToken = '67782dea16133fe513226e5853ee8b3ec935ff37'; // Replace with the actual user token
        const roomName = '2365199a-f2c5-4609-a888-4da584ba15f9';
    // const socket = new WebSocket(`ws:/localhost`)




    const chatSocket = new WebSocket(
        "ws://" +
          "localhost:8000"+
          "/ws/messages/" +
          roomName +
          "/?token=" +
          userToken
      );





        // const socket = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/${userToken}`);


        // useEffect(() => {
        //     const chatSocket = new WebSocket( )
        //       `ws://${window.location.host}/ws/messages/${roomName
        //     );




        // useEffect(() => {
        //     if (Object.keys(convo).length > 0 ){
        //     var chatWindow = document.getElementById("chatWindow");
        //     chatWindow.scrollIntoView(false) }
        // }, [convo])
        
        
        

        useEffect(() => {
            if (Object.keys(convo).length > 0 ) {
         
                setIsLoading(false)
        }
      }, [convo]);











    /**
     * ! function :
     */
 function addmsg(){
    let msg = {
        receiver : user.uid, 
        // sender : user.uid , 
        content : message 
    }
    setConvo(prevConvo => [...prevConvo, msg]);



 }











    
function handleChange(e) {
    const { name, value } = e.target;
    setMessage((prevData) => (
      value
      
    ));
  }


    const fetchData = async (url , method) => {
        try {
          const response = await axios[method](url, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${localStorage.getItem("authToken")}`
            }
          });
          return response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
      };

      function print(){
        console.log('convo', convo)
        console.log('message', message)
      }
    



     const Message = ({message} ) => {
 

  return (
    <div
      className={`chat-bubble ${message.receiver == user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        // src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{console.log(message)}</p>
        <p className="user-message">{message.content}</p>
      </div>
    </div>
  );
};









    // Scroll the chat window to the bottom
   



    

    return (

        <>
        { isLoading ?  <h1> loading </h1>
           
        :










            <div className="d-flex flex-column">
                <NavbarGiver></NavbarGiver>

            <button onClick={print}>print</button>




      <div className="d-flex flex-row align-items-end justify-content-center gap-5 ">
        {/* here  begins the left div that has only the past chats*/}
        <div className="d-flex flex-column  col-4 align-self-stretch ">
          <Inbox></Inbox>
        </div>
        {/* here  ends the left div that has only the past chats*/}






        {/* here begin the right side  */}

        <div className="d-flex flex-column  col-5 align-self-stretch justify-content-center  ilyes ">
          <div className="d-flex flex-row testl align-items-center sticky testa gap-2 ">
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
          <div
            className="d-flex flex-column testa flex-grow-1 justify-content-end flex-wrap"
            id="chatWindow" >


{convo.map(msg => (
    // console.log(msg)
  <Message message={msg} ></Message>
))}










       

         

          </div>

{/* here ends all the chat bubbles */}


          <div className=" d-flex flex-row align-items-center justify-content-center sendM ">

            <div className="testr row col-3  Neon Neon-theme-dragdropbox">
            <a className="Neon-input-choose-btn blue w-100 "> upload file</a>




          <input
        style={{
          zIndex: 999,
          opacity: 0,
          position:"absolute" ,
        border : "solid black 2px" ,
          width: '100%',
        //   height: '20px',
          
          right: '0px',
          left: '0px',
          marginRight: 'auto',
          marginLeft: 'auto',
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
            <button className="btn btn-success" onClick={addmsg}>send</button>
          
          </div>
        </div>
        {/* here ends the right div that has three sub div  */}
      </div>
      </div> }
      </>
    );
}

export default Chat;