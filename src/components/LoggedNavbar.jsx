import React, { useState } from 'react'
import { Mylogo } from './sub/mylogo'
import { useUser } from '../pages/reducers/common'

function LoggedNavbar({}) {
    const [user ] = useUser() ;
    const role = user.basic_info.role ;
    const [isToggeled , setistoggeled] = useState(false)
    function showMenu(){
        setistoggeled(!isToggeled)
    }
  return (
    <div className='drow-between pad loggedNavbar border '> 
        <Mylogo></Mylogo>
        <div className=" drow g2 ">
            { role == "seller" ? <button className='primarybtn-nopad '>{"add id document"}</button> :
            <button className='primarybtn'>{"search CareGivers"}</button>}
            <img src='bell.svg' className='navicon cursor'></img>
            <img src='arrow.svg'  className='navicon cursor'
            onClick={showMenu}
            ></img>
        </div>
        { isToggeled && <div className='dropDownMenu col border cursor'>
                <div className="item drow g2">
                    <img src="profile2.svg" alt="" className='navicon'/>
                    <p>edit my profile</p>
                </div>
                <div className="item drow g2">
                    <img src="set2.svg" alt=""  className='navicon '/>
                    <p>settings</p>
                </div>
                <div className="item drow g2">
                    <img src="out2.svg" alt="" className='navicon out   '  />
                    <p>log out</p>
                </div>
                
        </div>}
    </div>
  )
}

export default LoggedNavbar