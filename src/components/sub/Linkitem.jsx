import React, { useState } from 'react'
import Svg from '../../../public/profile2.svg'
function Linkitem({element , imgsrc , isselected , handleselected}) {
    let color = '#A35EC3'
  return (
    <div className={ "drow linkitem g2 " + `${isselected ?  "myselecteditem": null }` }
    id={element.navigationLink}
    onClick={handleselected}>
        <img src={isselected ? imgsrc +"colored.svg" : imgsrc +".svg"} alt=""  className='sidebaricon'
         id={element.navigationLink}
         onClick={handleselected}
        />
        <p className={isselected ? "pagetitle-selected" : "pagetitle"}
        id={element.navigationLink}
        onClick={handleselected}
        
        >{element.text}</p>    
    </div>
  )
}

export default Linkitem