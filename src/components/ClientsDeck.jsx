import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/sub/Card';
function ClientsDeck() {
    function print(e) {
        e.preventDefault();
        console.log("Convos :");
        console.log(Convos);
        console.log("allacount ", allAccounts);
      }
      function handleScroll(e) {
        e.preventDefault();
        const container = cardsref.current;
        const scrollLeft = container.scrollLeft;
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;
          console.log("scroll")
    
          // Check if the user has reached the right end
          const isRightEnd = scrollLeft + clientWidth >= scrollWidth;
          const isLeftEnd = container.scrollLeft == 0 ;
    
          if (isRightEnd)
        {setShowLeftArrow(true)
            setShowRightArrow(false)
          }
          else{
            if ( isLeftEnd){
            setShowLeftArrow(false)
            setShowRightArrow(true)
          }else 
        {setShowLeftArrow(true)
        setShowLeftArrow(true)}}
    
    
    
        console.log(cardsref.current.scrollWidth);
        if (cardsref.current.scrollWidth > cardsref.current.clientWidth){
          console.log("scrollable")
        }
        console.log('container.clientWidth', cardsref.current.clientWidth)
        // console.log(e)
      }
    
      
      function handlescroll (direction ){
        console.log("first")
        const container = cardsref.current;
        if (direction == "left")
        container.scrollLeft -= 200; 
      else if (direction == "right")
      container.scrollLeft += 200; 
    }
    
    
      useEffect( ()=>{
        if (cardsref.current.scrollWidth > cardsref.current.clientWidth){
        setShowRightArrow(true)
      }}, [])
    
      const cardsref = useRef();
      const [ showRightArrow , setShowRightArrow] = useState(false) 
      const [ showLeftArrow , setShowLeftArrow] = useState(false) 
    



  return (
    <div className="clients ">
    <h1 className="containertitle">{"Contractors : "}</h1>
    <div
      className="cardsrow  drow g2 "
      ref={cardsref}
      onScroll={e =>handleScroll (e)}
    >
      <Card name={"Marguritta Bastante"}></Card>
      <Card name={"Marguritta Bastante"}></Card>

    
      {/* <Card name={"Marguritta Bastante "}></Card> */}
    { showRightArrow && <div className="rightroundCircle">
      <img src = "arrow.svg"className="rightArrow"
    onClick={e =>handlescroll("right")}
    ></img>
      </div>}
    { showLeftArrow && <div className="leftroundCircle">
      <img src = "arrow.svg"className="leftArrow"
    onClick={e =>handlescroll("left")}
    ></img>
      </div>}
    </div>
  </div>
  )
}

export default ClientsDeck