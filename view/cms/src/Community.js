import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import './Community.css'
import SwiperCore, { EffectCoverflow, Pagination,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Marquee from "react-fast-marquee";
import {useState} from 'react'
import Billsmodal from './components/Billsmodal'
import Complaintmodal from './components/Complaintmodal'
import Servicerequest from './components/Servicerequest'
import Bookamenity from './components/Bookamenity'
import Uploaddocuments from './components/Uploaddocuments'
import Viewdocuments from './components/Viewdocuments'

function Community() {
  const [modaltoggle,setmodaltoggle]=useState(false)
  const [complaintmodaltoggle,setcomplaintmodaltoggle]=useState(false)
  const [servicerequest,setservicerequest]=useState(false)
  const [bookamenity1,setbookamenity1]=useState(false)
  const [updoctoggle,setupdoctoggle]=useState(false)
  const [vdoctoggle,setvdoctoggle]=useState(false)

  const rowr=[1,1,1,1,1,1,1,1,1,1]
  return (
    <>
      <Header/>
      <Navbar />
      <div id='community'>
        <div className='discover'> 
        <h1>Discover</h1>
        <p>View Society Residents and Management Committee</p>
        <br/>
        <h1>Residents</h1>

        
        
        
        
        <div className='residents'>
        <Swiper
        
        grabCursor={true}
        
        slidesPerView={"auto"}
        
        autoplay={{ delay: 3000,disableOnInteraction: false }}
        
        pagination={{
          clickable: true,
          
        }} 
        className="mySwiper"
      >
          {rowr.map(()=>{
            return(
              <SwiperSlide>
              <div className='resident-box'>
                <h4>Resident Name</h4>
                <h5>Flat No. 101</h5>
                <h5>Intrests</h5>
                <p>List of Intrests 1,2,3,4,5</p>

              </div>
              </SwiperSlide>
            )
          })}
          



        </Swiper>
        </div>
        
        <br/>
        <div>
        
        <h1>Management Committee</h1>
        <Marquee>
        {rowr.map(()=>{
            return(
              
              <div className='resident-box'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKBhW7qpccnXDnlrvhlWV7qeV_5ywACLKOA&usqp=CAU' className='rounded-circle'></img>
                <br></br><br/>
                <h4>Name: Lorem</h4>
                <h5>Designation: Lorem</h5>
                <h5>Contact: 9898989898</h5>
                <p>loremepsum@gmail.com</p>

              </div>
              
            )
          })}
          </Marquee>
        
        
        </div>


        </div>
        <br></br>
        <div className='engagep'>
        <h1>Engage</h1>
        <br/>
        <div className='engage'>
        
        <br/>
        <div className='engage-element'>
        <h1>HelpDesk</h1>
        <p>Raise Complaints and Service Requests  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet ex eu, egestas pulvinar ligula. Morbi eget mi in turpis feugiat bibendum in non eros. Curabitur ultricies tincidunt faucibus.</p>
        <div className='engage-buttons'>
          <button className='btn btn-info' onClick={()=>{setcomplaintmodaltoggle(true);document.body.style.overflow='hidden';document.getElementById('community').style.filter='blur(2px)'}}>Raise Complaint</button>
          <button className='btn btn-success' onClick={()=>{setservicerequest(true);document.body.style.overflow='hidden';document.getElementById('community').style.filter='blur(2px)'}}>Service Request</button>

        </div>

        
        </div>
        <div className='engage-element'>
        <h1>Book Amenities</h1>
        <p>Book facilities in your Society  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet ex eu, egestas pulvinar ligula. Morbi eget mi in turpis feugiat bibendum in non eros. Curabitur ultricies tincidunt faucibus.</p>
        <div className='engage-buttons'> 
          <button className='btn btn-info' onClick={()=>{setbookamenity1(true);document.body.style.overflow='hidden';document.getElementById('community').style.filter='blur(2px)'}}>Book Amenity</button>
        </div>
        </div>
        <div className='engage-element'>

        <h1>Documents</h1>
        <p>Your Community related Documents  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet ex eu, egestas pulvinar ligula. Morbi eget mi in turpis feugiat bibendum in non eros. Curabitur ultricies tincidunt faucibus.</p>
        <div className='engage-buttons'> 
          <button className='btn btn-info' onClick={()=>{setupdoctoggle(true);document.body.style.overflow='hidden';document.getElementById('community').style.filter='blur(2px)'}}>Upload Document</button>
          <button className='btn btn-success' onClick={()=>{setvdoctoggle(true);document.body.style.overflow='hidden';document.getElementById('community').style.filter='blur(2px)'}}>View Documents</button>
        </div>
        </div>
        </div>
        </div>

        <div className='payments'>
        <h1>Payments</h1>
        <br/>
        <div className='payment-boxp'>
        <div className='payment-box'>
        <h1>Rent Payment</h1>
        <p>Make rent payments and manage receipts Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet ex eu, egestas pulvinar ligula. Morbi eget mi in turpis feugiat bibendum in non eros.</p>
        <h2>Rent Details</h2>
        <br/>
        <table className='table'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Cost</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rent</td>
              <td>Rs. 9999</td>
            </tr>
            <tr>
              <td>Amenity</td>
              <td>Rs. 9999</td>
            </tr>
            <tr>
              <td>Others</td>
              <td>Rs. 9999</td>
            </tr>
            <tr>
              <td>Others</td>
              <td>Rs. 9999</td>
            </tr>
            <br/>
            <tr>
              <td>Total</td>
              <td>Rs. 19999</td>
            </tr>
          </tbody>
        </table>
        <div className='engage-buttons'>
        <button className='btn btn-success'>Pay Rent</button>
        </div>
        </div>
        
        <div className='payment-box'>
        <h1>Other Bills</h1>
        <p>Pay your bills Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet ex eu, egestas pulvinar ligula. Morbi eget mi in turpis feugiat bibendum in non eros.</p>
        
        <h2>Bill Details</h2>
        
        <table className='table'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Cost</td>
              <td>Details</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electricity</td>
              <td>Rs. 9999</td>
              <td><button className='btn btn-success' onClick={()=>{setmodaltoggle(true);document.body.style.overflow='hidden';document.getElementById('community').style.filter='blur(2px)'}}>View Details</button></td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>Rs. 9999</td>
              <td><button className='btn btn-success' onClick={()=>{setmodaltoggle(true);document.body.style.overflow='hidden';document.getElementById('community').style.filter='blur(2px)'}}>View Details</button></td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>Rs. 9999</td>
              <td><button className='btn btn-success' onClick={()=>{setmodaltoggle(true);document.body.style.overflow='hidden';document.getElementById('community').style.filter='blur(2px)'}}>View Details</button></td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>Rs. 9999</td>
              <td><button className='btn btn-success' onClick={()=>{setmodaltoggle(true);document.body.style.overflow='hidden';document.getElementById('community').style.filter='blur(2px)'}}>View Details</button></td>
            </tr>
            <br/>
            <tr>
              <td>Total</td>
              <td>Rs. 19999</td>
            </tr>
          </tbody>
        </table>
        <div className='engage-buttons'>
        <button className='btn btn-success'>Pay All Bills</button>
        </div>
        </div>
        </div>
        </div>
      </div>
      <br/>
      <Footer/>
      <Billsmodal show={modaltoggle} event={setmodaltoggle}/>
      <Complaintmodal show={complaintmodaltoggle} event={setcomplaintmodaltoggle}/>
      <Servicerequest show={servicerequest} event={setservicerequest}/>
      <Bookamenity show={bookamenity1} event={setbookamenity1}/>
      <Uploaddocuments show={updoctoggle} event={setupdoctoggle}/>
      <Viewdocuments show={vdoctoggle} event={setvdoctoggle}/>
    </>
  )
}

export default Community