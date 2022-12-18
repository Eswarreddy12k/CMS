import React from 'react'
import {useNavigate} from 'react-router-dom'

function Loginsuccess() {
    const navigate=useNavigate();
    navigate('/home')
  return (
    <div>Loginsuccess</div>
  )
}

export default Loginsuccess