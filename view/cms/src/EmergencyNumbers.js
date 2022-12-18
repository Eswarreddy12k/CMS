import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import './EmergencyNumbers.css'
import axios from 'axios'

function EmergencyNumbers(props) {
    const row=[1,1,1,1,1,1,1,1]
    const [emer,setemer]=useState([])
    axios.get("http://localhost:5000/getemergency/"+props.cuser)
    .then((data=>{setemer(data.data)})).catch(error => console.log('abc'+error));
    
  return (
    <>
    <Header />
    <Navbar />
    {emer.map((dd,ii)=>{
        return(
        <div className='emergencynum'>
            <div className='emergencynumh2'>
            <h2>{emer[ii].emergencyx_designation}</h2>
            </div>
            <div>
                <ul>
                    <li>{emer[ii].emergencyx_name}</li>
                    <li>{emer[ii].emergencyx_mobile}</li>
                    <li>{emer[ii].emergencyx_alt_mobile}</li>
                    
                </ul>
            </div>
            <button className='btn btn-danger'>Alert Designation</button>
        </div>
        )

    })}
    <br/>
    
    <Footer />
    </>
  )
}

export default EmergencyNumbers 