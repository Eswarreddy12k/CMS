import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import './Generatepass.css'

function Generatepass() {
  return (
    <>
    <Header />
    <Navbar />
    <div className='passbox'>
        <h1>Generate A Pass</h1>
        <br/>
        <form className='form-group' id='passform' action='/postvisitor' method='post'>
            <h3>Enter the Details to Generate a pass</h3>
            <br/>
            <input type='text' class='form-control' id='name' name='visitor_name' placeholder='Name of the Visitor'/>
            <br/>
            <select id="reason" name="visitor_reason" placeholder='Select The Reason' className='form-control'>
                <option value="dummy">---Select The Reason---</option>
                <option value="guest">Guest</option>
                <option value="cab">Cab</option>
                <option value="delivery">Delivery</option>
                <option value="other">Other</option>
            </select>
            <br/>
            <input type='number' class='form-control' id='mobile' name='visitor_mobile' placeholder='Mobile Number of the Visitor'/>
            <br/>
            <label for='date'>Arrival Date</label>
            <input type='date' class='form-control' id='date' name='visitor_date'/>
            <br/>
            <div className='passbutton'>
            <button className='btn btn-success btn-lg'>Generate</button></div>
        </form>
    </div>
    <Footer />
    
    </>
  )
}

export default Generatepass