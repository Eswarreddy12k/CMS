import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import './Notifications.css'

function Notifications() {
    const row=[1,1,1,1,1,1,1,1,1,1,1]
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='notification'>
        
        <h1>Notifications</h1>
        <br/>
        {row.map(()=>{
            return(
                <>
                <div className='notification-box'>
                    <h1>Notification Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti eos ex tempore inventore. Dolorum est, ad a deserunt eum ipsa fuga! Corrupti, odio esse. </p>

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