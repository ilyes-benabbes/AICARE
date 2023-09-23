import React from 'react'
import {Button} from '@mui/material';
import {  Link } from 'react-router-dom'

function Head() {
  return (
    <>
          <div className="Content col g3 fullpad  ">
        <div className=" g3  header col ">
          <p className="bigheader">
            Find the perfect care for your beloved ones{" "}
          </p>
          <p className="subheader">
            the first tool that uses <span>Artificial Intelligence </span>to
            find the best match between careGivers and careTakers , 
            the right place to link the ones
            in need with the appropriate person.
          </p>

          <div className="drow g3">
          <Link to="/sign">
            <Button >
              sign up 
              </Button>
            </Link>
            <Link to={"/log"}>
            <Button className="btnprimary">login</Button>
            </Link>
          </div>
          
        <div className="scroll-down "></div>
        
        </div>

      </div>
    </>
  )
}

export default Head