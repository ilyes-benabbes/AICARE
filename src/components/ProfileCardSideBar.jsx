import React from 'react'

function ProfileCardSideBar({profile}) {
  
    const items= [
        "email" , "gender" , "address" , "phone", "age" , 
    ]
  return (
    <div className="sidebar col g1 ">
    <div className="personaldetails col ">
      <div className="imgcontainer centerself">
              <img src="girl.jpg" alt="profile pic" className=''/>
      </div>
      <div className=" nameRole  ">
        <p className='thicktitle'>{"soffia lollita"}</p>
        <p className='thicktitle-sub'>{profile.role}</p>
      </div>

    </div>

<div className="elements col">
{items.map(el =>{
    return (< >
        <p className='containertitle-small'>{el}</p>
        <p>{profile[el]}</p>
        </>
        )
} )}
</div>
    </div>
  )
}

export default ProfileCardSideBar