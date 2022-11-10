import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Security.css'

function Security() {
    const row=[1,1,1,1,1,11,1,11,1]
  return (
    <>
    <Header/>
    <div className='uvisitors'>
        {row.map(()=>{
            return(
                <>
            <div className='uvisitors-box'>
            <h3>Name of Visitor </h3>
            <p>Lorem ipsum dolor sit amet,</p><p> consectetur adipiscing</p>
            <h6>Mobile Number</h6>
            <h6>Date</h6>
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