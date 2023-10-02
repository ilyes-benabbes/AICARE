import React from 'react'
import { useLocation } from "react-router-dom";
import Layout from './Layout';
import { Profile } from '../components/sub/Inboxprofile';
import ContractItem from '../components/contractItem';


function Contracts() {
   
  return (
    <Layout isCaregiver pageName={"Contracts"}>
      <div className="contractsPage">
      <div className="contractsContainer col">
        <h1>{"Contracts : "}</h1>

        <ContractItem></ContractItem>

<div className='drow myRectangle'>
      <img src="girl.jpg" alt="profile.png" />

              <div className="col full">
          <div className="name  ">
            <p className="head pname"
            > {"Contract id 00x"}</p>
            
          </div>
            <p className="myplaceholder minibold-sub ">{"mariga vuelvera"} </p>
            <div className="badge-canceled">canceled</div>
          
          </div>
          <button className='secondarybtn'> show details</button>
          </div>
<div className='drow myRectangle'>
      <img src="girl.jpg" alt="profile.png" />

              <div className="col full">
          <div className="name  ">
            <p className="head pname"
            > {"Contract id 00x"}</p>
            
          </div>
            <p className="myplaceholder minibold-sub ">{"mariga vuelvera"} </p>
            <div className="badge-finished">finished</div>
          
          </div>
          <button className='secondarybtn'> show details</button>
          </div>
  
<div className='drow myRectangle'>
      <img src="girl.jpg" alt="profile.png" />

              <div className="col full">
          <div className="name  ">
            <p className="head pname"
            > {"Contract id 00x"}</p>
            
          </div>
            <p className="myplaceholder minibold-sub ">{"mariga vuelvera"} </p>
            <div className="badge-active">active</div>
          
          </div>
          <button className='secondarybtn'> show details</button>
          </div>
          <ContractItem></ContractItem>
  
          </div>
          </div>
   </Layout>
  )
}

export default Contracts