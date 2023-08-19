import React from 'react'
import styles from "./LoggedInCaregiverIfProfile.module.css";
import styles2 from "./mycss.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import "./inbox.css"

function Inbox() {
  return (<>
    
    <h1>Messages</h1>
    <div className=" d-flex flex-column p-2 gap-2 alpha h-25    testB">
           


           {/* from here  */}
      <div className=" d-flex flex-row  justify-content-between w-100 test ">
        <div className="   d-flex flex-row">
          <div className={styles2.imagemypatien}>
            <img src="/human.png" alt="Profile" className={styles2.image} />
          </div>
          <div className={styles2.msg}>
          <p className='titre'>{"patient name here"}</p>
          <p className='title msg'>{"hey guys are yy ge here "}</p>
          
          {/* *! do not forget to limit the message size to 600 characters max i think */}

          </div>
    
        </div>




        <div className="d-flex flex-row justify-content-between">
      
        <div className='d-flex flex-row  btn  toggle mild p-1 align-items-center justify- content-center col-5'>

<div className='title text-center flex-grow-1 align-items-center justify-content-center ' >check profile</div>
<img src='myaccount.svg' className='icon'></img>

</div>

<div className='d-flex flex-row  btn  mild p-1 align-items-center justify-content-stretch align-content-stretch col-5'>

<div className='title text-center align-items-center justify-content-center ' >open chat</div>
<img src='arrow-ios-forward.svg' className='icon'></img>

</div>


            

        </div>

      </div>
     
       {/* the end */}

           {/* from here  */}
      <div className=" d-flex flex-row  justify-content-between w-100 test">
        <div className="   d-flex flex-row">
          <div className={styles2.imagemypatien}>
            <img src="/human.png" alt="Profile" className={styles2.image} />
          </div>
          <div className={styles2.msg}>
          <p className='titre'>{"patient name here"}</p>
          <p className='title'>{"hey here ilyes ... "}</p>
          
          {/* *! do not forget to limit the message size to 600 characters max i think */}

          </div>
    
        </div>




        <div className="d-flex flex-row justify-content-between">
      
        <div className='d-flex flex-row  btn  mild p-1 align-items-center justify- content-center col-5'>

<div className='title text-center flex-grow-1 align-items-center justify-content-center ' >check profile</div>
<img src='myaccount.svg' className='icon'></img>

</div>

<div className='d-flex flex-row  btn  mild p-1 align-items-center justify-content-stretch align-content-stretch col-5'>

<div className='title text-center align-items-center justify-content-center ' >open chat</div>
<img src='arrow-ios-forward.svg' className='icon'></img>

</div>


            

        </div>

      </div>
     
       {/* the end */}
       
           {/* from here  */}
      <div className=" d-flex flex-row  justify-content-between w-100 test">
        <div className="   d-flex flex-row">
          <div className={styles2.imagemypatien}>
            <img src="/human.png" alt="Profile" className={styles2.image} />
          </div>
          <div className={styles2.msg}>
          <p className='titre'>{"patient name here"}</p>
          <p className='title'>{"hey guys essage here "}</p>
          
          {/* *! do not forget to limit the message size to 600 characters max i think */}

          </div>
    
        </div>




        <div className="d-flex flex-row justify-content-between">
      
        <div className='d-flex flex-row  btn  mild p-1 align-items-center justify- content-center col-5'>

<div className='title text-center flex-grow-1 align-items-center justify-content-center ' >check profile</div>
<img src='myaccount.svg' className='icon'></img>

</div>

<div className='d-flex flex-row  btn  mild p-1 align-items-center justify-content-stretch align-content-stretch col-5'>

<div className='title text-center align-items-center justify-content-center ' >open chat</div>
<img src='arrow-ios-forward.svg' className='icon'></img>

</div>


            

        </div>

      </div>
     
       {/* the end */}
     




    </div> 
</>

  );
}

export default Inbox