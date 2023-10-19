



import React from "react";

   export function Message({isnew , msg , isme}) {
    // console.log('msg', msg)
    // console.log('isme', isme)
    // console.log('isnew', isnew)

      return (<div className={isme ? "m-me" : "m-freind"}>
  <img src="face.png" alt="sender" className={(!isnew) ? "invisible" : null}/>
  <div className={isme ? "msg-purple" :"msg-gray" }>
  <p className="chatfont">{msg.content}</p>
  </div>
</div>);
    }
  
  
  