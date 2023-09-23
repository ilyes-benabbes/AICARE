import React from 'react'

function Contact() {
  return (
    <div className='contact'>

        <div className="drow-between pad g3">


        <div className="col leftside  g2">


                <p className='header drow-center  textleft'> get in touch</p>
                <p className='textleft'> Please fill out the form below to send us an email and we will get back to you as soon as possible</p>


<div className="form col-center g2">
 <input type="text" placeholder='name' />
 <input type="text" placeholder='email' />
 <input type="text" placeholder='message' />
<button className='btnprimary'>send message</button>
</div>


        </div>


        <div className="col rightside ">

<p className='header'> contact info </p>


<p>address </p>
<p className='sub'>4321 California St, San Francisco, CA 12345</p>

<p>phone </p>
<p className='sub'>+1 123 456 1234</p>

<p>email</p>
<p className='sub'>info@company.com</p>

        </div>












        </div>





        
    </div>
  )
}

export default Contact