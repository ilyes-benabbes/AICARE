import React from 'react'
import { useLocation } from "react-router-dom";

function Contract() {
    const location = useLocation();
    const contract = location.state
  return (
    <div>{contract}</div>
  )
}

export default Contract