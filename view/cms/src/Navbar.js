import React from 'react'
import './Navbar.css'
import {useNavigate} from 'react-router-dom';

function Navbar() {
    const navigate=useNavigate();
    function handleHome(){
        navigate('/home')
    }
    function handleCommunity(){
        navigate('/Community')
    }
    function handleNeighbourhood(){
        navigate('/Neighbourhood')
    }
    function handleServices(){
        navigate('/Services')
    }
    function handleNotifications(){
        navigate('/Notifications')
    }
  return (
    <div className='navbar1'>
        <div className='navbar2'>
        <button onClick={()=>{handleHome()}}>Home</button>
        <button onClick={()=>{handleCommunity()}}>Community</button>
        <button onClick={()=>{handleNeighbourhood()}}>Neighbourhood</button>
        <button onClick={()=>{handleServices()}}>Services</button>
        <button onClick={handleNotifications} className='btn btn-dark' style={{marginRight: '50px'}}>Notifications</button>
        </div>
    </div>
  )
}

export default Navbar