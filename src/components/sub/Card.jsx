import React from 'react'

function Card({name}) {
  return (
   
          <div className={"clientcard col-center"}>
            <div className="imgcontainer">
              <img src="girl.jpg  " alt="girl" />
              {/* <img src={imgUrl} alt="girl" /> */}
            </div>
            <p className="cardFont">{name}</p>
            <button className="secondarybtn g1">
              <p>{"check contract"}</p>
              <img src="checkcontract.svg" alt="linkk"></img>
            </button>
            <button className="primarybtn g1">
              <p>{"open chat"}</p>
              <img src="rightarrow.svg" alt="linkk"></img>
            </button>
          </div>
        
    
     
  )
}

export default Card