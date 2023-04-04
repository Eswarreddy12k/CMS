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
import axios from 'axios'
import {useEffect} from 'react'


function Community(props) {
  const [modaltoggle,setmodaltoggle]=useState(false)
  const [complaintmodaltoggle,setcomplaintmodaltoggle]=useState(false)
  const [servicerequest,setservicerequest]=useState(false)
  const [bookamenity1,setbookamenity1]=useState(false)
  const [updoctoggle,setupdoctoggle]=useState(false)
  const [vdoctoggle,setvdoctoggle]=useState(false)
  const [neighbours,setneighbours]=useState([])
  const [managing,setmanaging]=useState([])
  const [bills,setbills]=useState([{"billsx_rent":0,"billsx_amenity":0,"billsx_others":0,"billsx_electricity":0,"billsx_water":0,"billsx_gas":0,"billsx_othersothers":0,"__v":0}])
  
  try{
    document.getElementById('commnav').style.backgroundColor='blue'
  document.getElementById('commnav').style.transform='scale(1.1)'

  }catch{}
  
  const getresidents=()=>{
    axios.get("http://localhost:5000/getresidents/"+props.cuser)
    .then(data => setneighbours(data.data)).catch(error => console.log('abc'+error));
  }
  useEffect(() => {
    getresidents();
  },[])

  const getbills=async ()=>{
    await axios.get("http://localhost:5000/getuserbills/"+props.cuser)
    .then(data => setbills(data.data)).catch(error => console.log('abc'+error));
  }
  useEffect(() => {
    getbills();
  },[])

  const getmanaging=()=>{
    axios.get("http://localhost:5000/getmanaging/"+props.cuser)
    .then(data => setmanaging(data.data)).catch(error => console.log('abc'+error));
  }
  useEffect(() => {
    getmanaging();
  },[])
  



  



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
          {neighbours.map((dd,di)=>{
            
            return(
              neighbours[di].userx_id!=props.cuser &&

              <SwiperSlide>
              <div className='resident-box'>
                <h4>{neighbours[di].userx_name}</h4>
                <h5>Flat No. 101</h5>
                <h5>Intrests</h5>
                <p>{props.cuser}</p>

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
        {managing.map((dd,ii)=>{
           
            return(
              
              <div className='resident-box'>
                
                <img src={`./uploads/images/${managing[ii].managex_photo}`} alt='aa' className='rounded-circle'></img>
                <br></br><br/>
                <h4>{managing[ii].managex_name}</h4>
                <h5>{managing[ii].managex_designation}</h5>
                <h5>{managing[ii].managex_mobile}</h5>
                <p>{managing[ii].managex_email}</p>

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
              <td>{bills[0].billsx_rent}</td>
            </tr>
            
            <tr>
              <td>Amenity</td>
              <td>{bills[0].billsx_amenity}</td>
            </tr>
            
            <tr>
              <td>Others</td>
              <td>{bills[0].billsx_others}</td>
            </tr>
            <br/>


            <tr>
              <td>Total</td>
              <td>{eval(bills[0].billsx_rent+bills[0].billsx_amenity+bills[0].billsx_others)}</td>
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
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electricity</td>
              <td>{bills[0].billsx_electricity}</td>
              
            </tr>
            <tr>
              <td>Water</td>
              <td>{bills[0].billsx_water}</td>
            </tr>
            <tr>
              <td>Gas</td>
              <td>{bills[0].billsx_gas}</td>
            </tr>
            <tr>
              <td>Others</td>
              <td>{bills[0].billsx_othersothers}</td>
            </tr>
            <br/>
            <tr>
              <td>Total</td>
              <td>{eval(bills[0].billsx_electricity+bills[0].billsx_othersothers+bills[0].billsx_gas+bills[0].billsx_water)}</td>
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
      <Billsmodal show={modaltoggle} cuser={props.cuser} event={setmodaltoggle}/>
      <Complaintmodal show={complaintmodaltoggle} cuser={props.cuser} event={setcomplaintmodaltoggle}/>
      <Servicerequest show={servicerequest} cuser={props.cuser} event={setservicerequest}/>
      <Bookamenity show={bookamenity1}  event={setbookamenity1}/>
      <Uploaddocuments show={updoctoggle} cuser={props.cuser} event={setupdoctoggle}/>
      <Viewdocuments show={vdoctoggle} cuser={props.cuser} event={setvdoctoggle}/>
    </>
  )
}

export default Community