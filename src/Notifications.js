import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import './Notifications.css'
import axios from 'axios'
import { useEffect } from 'react'

function Notifications(props) {
    const row=[1,1,1,1,1,1,1,1,1,1,1]
    const [notif1,setnotif1]=useState([])
    //console.log(props.cuser)

    const getusers=()=>{
      axios.get("https://cms-b.onrender.com/getnotifications/"+props.cuser)
      .then(data => setnotif1(data.data)).catch(error => console.log('abc'+error));
    }
    useEffect(() => {
      getusers();
    },[])
    
    try{
        document.getElementById('commnotif').style.backgroundColor='blue'
  document.getElementById('commnotif').style.transform='scale(1.1)'

    }
    catch{}
    

  return (
    <>
    <Header/>
    <Navbar/>
    <div className='notification'>
        
        <h1>Notifications</h1>
        <br/>
        {notif1.map((dd,ii)=>{
            return(
                <>
                <div className='notification-box'>
                    <h1>{notif1[ii].notificationx_title}</h1>
                    <p>{notif1[ii].notificationx_text}</p>

                </div>
                </>
            )
        })}


    </div>




    <Footer/>
    
    
    
    </>
  )
}

export default Notifications