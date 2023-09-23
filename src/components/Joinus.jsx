import React from 'react'
import { Link } from "react-router-dom";


function Joinus() {
  return (
    <div className='join drow-center fullpad '> 
    <div className="col-center g3 left ">
        <p className='bigheader'> create an account with us for free now and find the care you deserve from someone you trust 
        </p>
        <Link to={"/sign"}> 
        <button className='btnsecondary'>join us</button>
</Link>
    </div>
 
    
    </div>
  )
}

export default Joinus