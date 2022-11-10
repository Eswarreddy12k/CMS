import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import './Services.css'
import Footer from './Footer'

function Services() {
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
        <button className='btn btn-success' >Book</button>
        </div>

          </div>
          <div className='long-term'>
          <h1>Long-term Services</h1>
          <p>like Maid,CareTaker etc...</p>
        <form className='form-group'>
            <select className='form-control'>
                <option>--select Service Type--</option>
                <option>Option1</option>
                <option>Option2</option>
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

        </form>
        
        <div className='modal-buttons'>
        <button className='btn btn-success' >Book</button>
        </div>

          </div>

          </div>

        </div>
        

        <br></br>
        <div className='tserv'>
        <h1>Trending Services</h1>
        <p>Services like Cabs,Car Rentals,Diagnostic Tests,Appliance Repairs</p>
        <div className='tservices'>
          <div className='service'>
            <img src='https://i.pinimg.com/600x315/1b/14/18/1b1418e12d9a0a72c2f374b976168425.jpg' className='rounded-circle'/>
            <h2>Service Name</h2>
            <div className='modal-buttons'>
              <button className='btn btn-success' >Book</button>
            </div>
          </div>
          <div className='service'>
            <img src='https://i.pinimg.com/600x315/1b/14/18/1b1418e12d9a0a72c2f374b976168425.jpg' className='rounded-circle'/>
            <h2>Service Name</h2>
            <div className='modal-buttons'>
              <button className='btn btn-success' >Book</button>
            </div>
          </div>
          <div className='service'>
            <img src='https://i.pinimg.com/600x315/1b/14/18/1b1418e12d9a0a72c2f374b976168425.jpg' className='rounded-circle'/>
            <h2>Service Name</h2>
            <div className='modal-buttons'>
              <button className='btn btn-success' >Book</button>
            </div>
          </div>
          <div className='service'>
            <img src='https://i.pinimg.com/600x315/1b/14/18/1b1418e12d9a0a72c2f374b976168425.jpg' className='rounded-circle'/>
            <h2>Service Name</h2>
            <div className='modal-buttons'>
              <button className='btn btn-success' >Book</button>
            </div>
          </div>
          <div className='service'>
            <img src='https://i.pinimg.com/600x315/1b/14/18/1b1418e12d9a0a72c2f374b976168425.jpg' className='rounded-circle'/>
            <h2>Service Name</h2>
            <div className='modal-buttons'>
              <button className='btn btn-success' >Book</button>
            </div>
          </div>
          <div className='service'>
            <img src='https://i.pinimg.com/600x315/1b/14/18/1b1418e12d9a0a72c2f374b976168425.jpg' className='rounded-circle'/>
            <h2>Service Name</h2>
            <div className='modal-buttons'>
              <button className='btn btn-success' >Book</button>
            </div>
          </div>
          <div className='service'>
            <img src='https://i.pinimg.com/600x315/1b/14/18/1b1418e12d9a0a72c2f374b976168425.jpg' className='rounded-circle'/>
            <h2>Service Name</h2>
            <div className='modal-buttons'>
              <button className='btn btn-success' >Book</button>
            </div>
          </div>

        </div>
        </div>
        <br></br>

        
    <Footer/>
    </>
    
  )
}

export default Services