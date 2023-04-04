import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState,useEffect } from 'react'
import axios from 'axios'


function HeadAdmin() {
  const [seru,setseru]=useState([])
    const getusers=()=>{
        axios.get("https://cms-b.onrender.com/getseru")
        .then(data => setseru(data.data)).catch(error => console.log('abc'+error));
      }
      useEffect(() => {
        getusers();
      },[])
  
  return (
    <>
    <Header/>
    
    <div style={{transform:"scale(0.9)"}}>
    <h1>Add Community</h1>
    <form action='/addcommunityx' method='post' className='form-group' style={{transform:"scale(0.9)"}}>
        Community Name
        <input type='text' name='communityx_name' className='form-control'></input>
        Community ID 
        <input type='text' name='communityx_id' className='form-control'></input>
        Community Location
        <input type='text' name='communityx_location' className='form-control'></input>
        Community Admin Name
        <input type='text' name='communityx_admin_name' className='form-control'></input>
        Community Admin ID
        <input type='text' name='communityx_admin_id' className='form-control'></input>
        Community Admin Mobile
        <input type='number' name='communityx_admin_mobile' className='form-control'></input>
        
        <button type='submit' className='btn btn-success'>Submit</button>
    </form>


    <h1>Community </h1>
    
    <table className='table' style={{transform:'scale(0.9)'}}>
      <thead>
          <tr>
            <th>Community Name </th>
            <th>Community ID</th>
            <th>Location</th>
            <th>Admin Name</th>
            <th>Admin ID</th>
            <th>Admin Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
      </thead>
      <tbody>
    {

seru.map((dd,ii)=>{
        
        return(
          <>
          
          <tr>
          <td>{seru[ii].communityx_name}</td>
          <td>{seru[ii].communityx_id}</td>
          <td>{seru[ii].communityx_location}</td>
          <td>{seru[ii].communityx_admin_name}</td>
          <td>{seru[ii].communityx_admin_id}</td>
          <td>{seru[ii].communityx_admin_mobile}</td>
          <td><a href={``}>Edit</a></td>
          <td><a href={``}>Delete</a></td>
          </tr>
          </>
        )
      })
    }
    </tbody>
    </table>


    <br/>






    </div>




    <Footer/>
    
    
    </>
  )
}

export default HeadAdmin