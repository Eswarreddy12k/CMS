import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'



import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
import './Home.css'
import SwiperCore, { EffectCoverflow, Pagination,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Ringalarmmodal from './components/Ringalarmmodal'


import "swiper/swiper.min.css";
import Footer from './Footer'

import axios from 'axios'


 

function Home(props) {
  const [log,setlog]=useState(false)
  axios.get('/gethome',{
    headers:{
      "xaccesstoken":localStorage.getItem("token")
    }}).then((response)=>{
    if(response.data.auth){
        setlog(true)
    }
    else{
      setlog(false)
    }
  })
  

  
  try{
    document.getElementById('commhome').style.backgroundColor='blue'
  document.getElementById('commhome').style.transform='scale(1.1)'

  }
  catch{}
  
  const usi='111';
  console.log(props.userid1);
  const getCustomersData = () => {
    
    axios
    .get("http://localhost:5000/Dummylogins")
    .then(data => console.log(data))
    .catch(error => console.log('abc'+error));
    };
  getCustomersData();
  
    const [visitors,setvisitors]=useState([])
    const [ann,setann]=useState([])
    const [modaltoggle,setmodaltoggle]=useState(false)
    const navigate=useNavigate()
    function handleHire(){
        navigate('/hire')
    }
    function handlepass(){
        navigate('/generatepass')
    }
    function handleEmergencycontacts(){
        navigate('/EmergencyNumbers')
    }
    const rows=[1,1,1,1,1];
    useEffect(()=>{
      const returnedvisitors=getvisitors();
      console.log(returnedvisitors)

    },[]);
    


    const getvisitors=()=>{
      props.setuserid1(window.location.href.slice(27))
    axios.get("http://localhost:5000/visitorsdb/"+window.location.href.slice(27)).then((response)=>{const allvisitors=response.data;setvisitors(allvisitors)}).catch(error => console.log('abc'+error));
    return visitors;
  }

  useEffect(()=>{
    getann();
  },[])
  const getann=()=>{
    axios.get("http://localhost:5000/anndb/"+window.location.href.slice(27)).then((response)=>{setann(response.data)}).catch(error => console.log('abc'+error));
  }
  useEffect(() => {
    console.log(visitors);
  }, [visitors]);
  
    
    SwiperCore.use([Autoplay])
    if(setlog){
  return (
    
    <>
    <Header />
    <Navbar />
    
    <div id='homeid'>
        
      
        <div className='announcements'>
        
        <h1>Community Announcements</h1>
        <br></br>
        {console.log(visitors)}
        {ann.map((data,i)=>{
          return(
          <>
          <div className='announcement-box'>
          <h3>{ann[i].ann_name}</h3>
          <p>{ann[i].ann_desc}</p>
          <br></br>
          </div>
          </>)
        })}
        </div>
        <div className='visitors'>
        <h1>Visitors</h1><br></br>
        
        <div className='visitor-flex'>
        <Swiper
        
        grabCursor={true}
        
        slidesPerView={"auto"}
        
        autoplay={{ delay: 3000,disableOnInteraction: false }}
        
        pagination={{
          clickable: true,
          
        }} 
        className="mySwiper"
      >
        {console.log(visitors)}
        {visitors.map((data,i)=>{
          
          return(
          <>
          <SwiperSlide>
        <div className='visitor-box'>
        
        <h3>{visitors[i].visitor_name} </h3>
        <p>{visitors[i].visitor_reason}</p>
        <p>Mobile:{visitors[i].visitor_mobile}</p>
        <p>{visitors[i].visitor_date}</p>
        
        <br></br>
        </div>
        </SwiperSlide>
        </>)
        })}
        </Swiper>
        </div>
        </div>
        <div className='visitorpass'>
        <h1>Visitor Pass</h1>
        <div className='visitorpass-box'>
        <p>Generate visitor pass for future visits of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet</p>
        <button className='btn btn-success' onClick={()=>{handlepass()}}>Generate A Pass</button>
        <br/><br/>
        </div>
        <br></br>
        </div>
        <div className='emergency'>
        <h1>Emergency Alerts</h1>
        <div className='emergency-box'>
        <p>Generate visitor pass for future visits of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet</p>
        <br></br>
        <div className='emergency-buttons'>
        <button className='btn btn-success' id='sss' onClick={()=>{handleEmergencycontacts()}}>View Emergency Contacts</button>
        <button className='btn btn-danger' onClick={()=>{setmodaltoggle(true);document.body.style.overflow='hidden';document.getElementById('homeid').style.filter='blur(2px)'}}>Ring Emergency Alarm</button>
        
        </div>
        </div>
        <br></br>
        </div>
        
        
        <Footer/>  
    </div>
    <Ringalarmmodal show={modaltoggle} event={setmodaltoggle}/>
    
    </>
    
  )}
  else{
    return(
      <>
      <p>Access Denied</p>
      </>
    )
  }
}

export default Home