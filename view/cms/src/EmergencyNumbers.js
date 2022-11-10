import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import './EmergencyNumbers.css'

function EmergencyNumbers() {
    const row=[1,1,1,1,1,1,1,1]
  return (
    <>
    <Header />
    <Navbar />
    {row.map(()=>{
        return(
        <div className='emergencynum'>
            <div className='emergencynumh2'>
            <h2>Designation(Example:Security)</h2>
            </div>
            <div>
                <ul>
                    <li>Mobile: 999999999 </li>
                    <li>Alternate Mobile: 888888888</li>
                    
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