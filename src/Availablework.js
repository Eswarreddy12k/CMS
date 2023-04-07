import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import './Availablework.css'
import Navbar from './Navbar'
function Availablework() {
    const [workdata,setworkdata]=useState([])
    //console.log(window.location.href.slice(36))

    axios.get("https://cms-b.onrender.com/availablework1/"+window.location.href.slice(36+4))
    .then(data => setworkdata(data.data)).catch(error => console.log('abc'+error));
    
  return (
    <>
    <Header/>
    <Navbar/>
    <div style={{transform:"scale(0.9)"}}>
    <h1>Nearby Services</h1>
    {workdata.map((data,i)=>{
          return(
            <>
            
            <div className='resident-box'>

            <div className='workcard'>
              <h2>Name: {workdata[i].work_name}</h2>
              <p>Work:{workdata[i].work_work}</p>
              <h3>Mobile:{workdata[i].work_mobile}</h3>
            </div>
            </div>
            </>

    )})}
    </div>
    <Footer/>
    </>
    
  )
}

export default Availablework