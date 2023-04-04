import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import './Services.css'
import Footer from './Footer'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
function Services() {
  
  const [workname,setworkname]=useState('')
  const navigate=useNavigate()
  function handlework(){
    navigate('/availablework/'+workname)
  }


  const rowr=[1,1,1,1,1,1,1]
  try{
    document.getElementById('commserv1').style.backgroundColor='blue'
    document.getElementById('commserv1').style.transform='scale(1.1)'
  }
  catch{}
  try{
    document.getElementById('commserv1').style.backgroundColor='blue'
    document.getElementById('commserv1').style.transform='scale(1.1)'
  }
  catch{}
  
  
  return (

    <>
      <Header/>
      <Navbar />
      
    
      <div className='hser'>
        <h1>Home Services</h1>
        <p>Find Daily Help and Service Providers</p>
        <div className='services'>
          <div className='short-term'>
          <h1>Short-term Services</h1>
          <p>like Cleaning,Saloon etc...</p>
        <form className='form-group'>
            <select className='form-control'>
                <option>--select Service Type--</option>
                <option>Option1</option>
                <option>Option2</option>
                <option>Option3</option>
                <option>Option4</option>
            </select>
            <br/>
            <input type='date' class='form-control'/>
            <br/>
            <textarea className='form-control' placeholder='Any Instructions'></textarea>
            <br/>
            
            <br/>

        </form>
        
        <div className='modal-buttons'>
        
        <a className='btn btn-success' href='https://www.urbancompany.com/hyderabad?utm_medium=cpc&utm_source=google&utm_campaign=18121492302&Adgroup=140340985916&Keyword=urban%20company&Matchtype=b&Device=c&Adposition=&Placement='>View1</a>
        </div>

          </div>
          <div className='long-term'>
          <h1>Long-term Services</h1>
          <p>like Maid,CareTaker etc...</p>
        <form className='form-group'>
            <select className='form-control' onChange={(e)=>{setworkname(e.target.value);}}>
                <option>--select Service Type--</option>
                <option>Maid</option>
                <option>Driver</option>
                <option>Option3</option>
                <option>Option4</option>
            </select>
            <br/>
            <label>Number of Months(Approx)</label>
            <input type='number' class='form-control'/>
            <br/>
            <textarea className='form-control' placeholder='Any Instructions'></textarea>
            <br/>
            
            <br/>

            <div className='modal-buttons'>
            <button className='btn btn-success' onClick={()=>{handlework()}}>See Nearby Work Professionals</button>
            </div>

        </form>
        
        
        
        

          </div>

          </div>

        </div>
        

        <br></br>
        <div className='tserv'>
        <h1>Trending Services</h1>
        <p>Services like Cabs,Car Rentals,Diagnostic Tests,Appliance Repairs</p>
        


      <div className="containerx">
        {rowr.map((dd,ii)=>{
          return(
            <div className="card">
            <div className="card-header">
              <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
            </div>
            <div className="card-body">
              <span className="tag tag-teal">Trending</span>
              <br/>
              <h4>
                Saloon
              </h4>
              <br/>
              <div className="user">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/v1467812027/uc_logo.png" alt="user" />
                <div className="user-info">
                  
                  <small>By</small>
                  <h5>UrbanCompany</h5>
                </div>
              </div>
              
              
  
            </div>
            <div className='cardlink'>
              <a href='https://www.urbancompany.com/hyderabad?utm_medium=cpc&utm_source=google&utm_campaign=18121492302&Adgroup=140340985916&Keyword=urban%20company&Matchtype=b&Device=c&Adposition=&Placement=' className='btn btn-success'>View</a>
  
              </div>
              <br/>
            </div>

          )
        })}
        
       
        

      </div>

      </div>
        
        <br></br>

        
    <Footer/>
    </>
    
  )
}



export default Services