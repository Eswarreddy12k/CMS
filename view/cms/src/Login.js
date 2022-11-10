import React from 'react'
import {Routes, Route, useNavigate,Router} from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faUser } from '@fortawesome/fontawesome-free-solid'
import Header from './Header';
import {useState,useEffect} from 'react'
import Footer from './Footer'
import axios from 'axios';



function Login() {
    const [username,setusername]=useState("")
    const [pw,setpw]=useState("")
    
    

    const navigate = useNavigate();
    console.log('aaa')
    function handleLogin(){
      if(pw=='security' && username=='security'){
        navigate('/security')

      }
      else if(pw=='admin' && username=='admin'){
        navigate('/admin')
      }
      else if(pw=='work' && username=='work'){
        navigate('/work')
      }
      else{
        navigate('/homes')
    }
    
    
    }
    

      


      
    
  return (
    <>
    <Header />
    <div className="content">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img
          src="https://careerbulls.in/wp-content/uploads/2020/01/Our-Placements.png"
          alt="Image"
          className="img-fluid"
        />
      </div>
      <div className="col-md-6 contents">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mb-4">
              <h3>Log In</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                consectetur adipisicing.
              </p>
            </div>
            <form >
              <div className="form-group first">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="id"
                  placeholder="username" onChange={(e)=>{setusername(e.target.value)}}
                />
              </div>
              <div className="form-group last mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="p"
                  placeholder="password" onChange={(e)=>{setpw(e.target.value)}}
                />
              </div>
              
              <div className="d-flex mb-5 align-items-center">
                <span className="ml-auto">
                  <a
                    href="mailto: placements@rit.ac.in"
                    className="forgot-pass"
                  >
                    Forgot Password
                  </a>
                </span>
              </div>
              <button onClick={()=>{handleLogin()}}  className="btn btn-block btn-primary" >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    <Footer/>
    </>
  )
}

export default Login