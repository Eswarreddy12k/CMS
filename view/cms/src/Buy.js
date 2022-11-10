import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import './Buy.css'

function Buy() {
    const row=[1,1,1,1,1,1,1,1,1,1]
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='buyxf'>
        <h1>Items Listed By Your Community</h1>
        <div className='buyx'>
        {row.map(()=>{
            return(
                <>
                <div className='item-box'>
                    <img src='https://aftechdistribution.ae/wp-content/uploads/2020/07/product-1-300x300.jpg' className='rounded'/>
                    <br/>
                    <h2>Name</h2>
                    <p>Description Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Maecenas in<br/> eleifend ex. Suspendisse tellus</p>
                    <h2>Contact</h2>

                </div>
                </>
            )
        })}
        </div>


    </div>

    <Footer/>


    </>
  )
}

export default Buy