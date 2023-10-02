import React from 'react'

function contractItem({isDoc }) {
  return (
    <div className='drow myRectangle'>
    <img src={ !isDoc ? "girl.jpg" : "doc2.png"} alt="profile.png" />

            <div className="col full">
        <div className="name  ">
          <p className="head pname"
          > { !isDoc ? "Contract id 00x" : "nursing certificat by MIT"}</p>
          
        </div>
          { !isDoc && <p className="myplaceholder minibold-sub ">{"mariga vuelvera"} </p>}
          <div className="badge-active">{"active"}</div>
        
        </div>
        <button className='secondarybtn'> show details</button>
        { isDoc && <button className='secondarybtn'>{"remove"}</button>}
        </div>
  )
}

export default contractItem