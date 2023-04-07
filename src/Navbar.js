import React, { useState } from 'react'
import './Navbar.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Navbar(props) {
    const navigate=useNavigate();
    const [cuser11,setcuser11]=useState('')

    axios.get("https://cms-b.onrender.com/isloggedin")
    .then(data => setcuser11(data.data)).catch(error => console.log('abc'+error));
    //console.log(cuser11);


    function handleHome(){
        
        navigate('/home/'+cuser11)
    }
    function handleCommunity(){
       
        navigate('/Community')
        
    }
    function handleNeighbourhood(){
        navigate('/Neighbourhood')
    }
    function handleServices(){
        navigate('/Services')
        document.getElementById('commserv1').style.backgroundColor='blue'
        document.getElementById('commserv1').style.transform='scale(1.1)'
    }
    function handleNotifications(){
        navigate('/Notifications')
    }
    
  return (
    <div className='navbar1'>
        <div className='navbar2'>
        <button onClick={()=>{handleHome()}} id='commhome'>Home</button>
        <button onClick={()=>{handleCommunity()}} id='commnav'>Community</button>
        
        <button onClick={()=>{handleServices()}} id='commserv1'>Services</button>
        <button onClick={handleNotifications} className='btn btn-dark' style={{marginRight: '50px'}} id='commnotif'>Notifications</button>
        </div>
    </div>
  )
}

export default Navbar