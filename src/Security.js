import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Security.css'
import axios from 'axios'
import { useEffect } from 'react'

function Security() {
  const [vis,setvis]=useState([])
  const getusers=()=>{
    axios.get("https://cms-b.onrender.com/getviss")
    .then(data => setvis(data.data)).catch(error => console.log('abc'+error));
  }
  useEffect(() => {
    getusers();
  },[])
    const row=[1,1,1,1,1,11,1,11,1]
  return (
    <>
    <Header/>
    <div className='uvisitors'>
        {vis.map((dd,ii)=>{
            return(
                <>
            <div className='uvisitors-box'>
            <h3>Visitor: {vis[ii].visitor_name} </h3>
            <p>Reason: {vis[ii].visitor_reason}</p><p>To:{vis[ii].owner_id}</p>
            <h6>Mobile: {vis[ii].visitor_mobile}</h6>
            <h6>Date: {vis[ii].visitor_date}</h6>
            <br></br>
            </div>
            </>
            )
        })}
        


        

    </div>


    <Footer/>

    </>
  )
}

export default Security