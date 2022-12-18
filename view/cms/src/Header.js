import React, { useState } from 'react'
import './Header.css'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUser } from '@fortawesome/fontawesome-free-solid'
import {Routes, Route, useNavigate,Router} from 'react-router-dom';

import Login from './Login';

function Header() {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/', {replace: true});
      };
    const handleHome=()=>{
        navigate('/',{replace:true});
    }
    
    return (
    <>
        <div className='header'>
            <div>
                <h1>Community Management System</h1>
            </div>
            <div>
                <button onClick={()=>{navigate('/work')}} className='btn btn-dark' style={{marginRight: '50px'}}>Work With Us</button>
                <button onClick={handleHome} className='btn btn-dark' style={{marginRight: '50px'}}>Contact Us</button>
                {localStorage.getItem("token") &&
                                 <button onClick={()=>{localStorage.removeItem("token");navigate('/')}} style={{background:'white',width:'40px',height:'40px',borderRadius:'50%',fontSize:'20px'}}><FontAwesomeIcon icon={faSignOutAlt} /></button>

                
                }
            </div>
            
            
            
        </div>
        
    </>
  )
}


export default Header