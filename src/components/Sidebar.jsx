import React from 'react'
import Linkitem from './sub/Linkitem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar( {initialSelected  , checkingProfile}) {
  const navigate = useNavigate()
    const [ selected  ,setselected] = useState(initialSelected)

function handleselected(e){
  e.preventDefault()
  console.log('e.target.id', e.target.id)
  setselected(e.target.id)
  console.log('e.target.id', e.target.id)
  navigate(`/${e.target.id}`) ;
  
      }
    const elements = [
        {text : "Dashboard" , imgsrc : "profile3" , navigationLink :"Dashboard"} ,
        {text : "Messages" , imgsrc : "chats" , navigationLink :"Messages"},
        {text : "Calendar" , imgsrc : "calendar" , navigationLink :"Calendar"},
        {text : "Contracts" , imgsrc : "contracts" , navigationLink :"Contracts"},
        {text : "Skills & Certificats" , imgsrc : "skills" , navigationLink :"Skills"}
      ]
      if (!checkingProfile ){
  return (

    <div className="sidebar col g1 ">
    <div className="personaldetails col ">
      <div className="imgcontainer centerself">
              <img src="face.png" alt="profile pic" className=''/>
      </div>
      <div className=" nameRole  ">
        <p className='thicktitle'>{"selina martinez"}</p>
        <p className='thicktitle-sub'>{"careGiver"}</p>
      </div>

    </div>
   
<div className="links col g2 ">
{elements.map((element , index)=>{

return(
<Linkitem element={element}  imgsrc={element.imgsrc} handleselected={handleselected}
isselected={ selected === element.text   ? true : false} 
key={index}
></Linkitem>
)
})}



</div>



    </div>
  ) } 

}

export default Sidebar