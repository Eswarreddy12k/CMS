import React from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { useState,useEffect } from 'react'



function Admin() {
    const [servu,setservu]=useState([])
    const [servum,setservum]=useState([])
    const getusers=()=>{
        axios.get("https://cms-b.onrender.com/getuserscadmin/"+window.location.href.slice(28+4))
        .then(data => setservu(data.data)).catch(error => console.log('abc'+error));
      }
      useEffect(() => {
        getusers();
      },[])
      const getmanage=()=>{
        axios.get("https://cms-b.onrender.com/getmanagecadmin/"+window.location.href.slice(28+4))
        .then(data => setservum(data.data)).catch(error => console.log('abc'+error));
      }
      useEffect(() => {
        getmanage();
      },[])
  const postroute='https://cms-b.onrender.com/addannouncement/'+window.location.href.slice(28+4)
  const postemer='https://cms-b.onrender.com/addemergencycontacts/'+window.location.href.slice(28+4)
  const postmc='https://cms-b.onrender.com/addmanage/'+window.location.href.slice(28+4)

  return (
    
    <>
    <Header/>
    <div style={{transform:"scale(0.9)"}}>
    <h1>Add Announcement</h1>
    <form action={postroute} method='post' className='form-group' style={{transform:"scale(0.9)"}}>
        Name
        <input type='text' name='annname' id='annname' className='form-control'></input>
        Description
        <textarea name='anndesc' className='form-control'></textarea>
        <br/>
        <button type='submit' className='btn btn-success'>ADD</button>

    </form>

    <h1>Add A User</h1>
    <form action={`/adduserx/${window.location.href.slice(28)}`} method='post' className='form-group' style={{transform:"scale(0.9)"}}>
        User Name
        <input type='text' name='userx_name' className='form-control'></input>
        User ID 
        <input type='text' name='userx_id' className='form-control'></input>
        User Community
        <input type='text' name='userx_community' className='form-control'></input>
        User Mobile 
        <input type='text' name='userx_mobile' className='form-control'></input>
        User Door No 
        <input type='text' name='userx_door_no' className='form-control'></input>
        User Floor
        <input type='text' name='userx_floor' className='form-control'></input>
        <br/>
        <button className='btn btn-success' type='submit'>Submit</button>
    </form>
    <h1>Send Notification</h1>
    <form action={`/sendnotification/${window.location.href.slice(28)}`} method='post' className='form-group' style={{transform:"scale(0.9)"}}>
        Notification Title
        <input type='text' name='notificationx_title' className='form-control'></input>
        Notification Text
        <textarea name='notificationx_text' className='form-control'></textarea>
        User ID
        <input type='text' name='notificationx_userid' className='form-control'></input>
        <br/>
        <button className='btn btn-success' type='submit'>Send Notification</button>
    </form>
    <h1>Add Emergency Contacts</h1>
    
    <form action={postemer} method='post' className='form-group' style={{transform:"scale(0.9)"}}>
        Name
        <input type='text' name='emergencyx_name' className='form-control'></input>
        Designation
        <input type='text' name='emergencyx_designation' className='form-control'></input>
        Mobile No
        <input type='number' name='emergencyx_mobile' className='form-control'></input>
        Alternate Mobile
        <input type='text' name='emergencyx_alt_mobile' className='form-control'></input>
        <br/>
        <button type='submit' className='btn btn-success'>ADD</button>
    </form>

    <h1>Add Managing Staff</h1>
    
    <form action={postmc} method='post' className='form-group' enctype="multipart/form-data" style={{transform:"scale(0.9)"}}>
        Name
        <input type='text' name='managex_name' className='form-control'></input>
        ID
        <input type='text' name='managex_id' className='form-control'></input>
        Designation
        <input type='text' name='managex_designation' className='form-control'></input>
        Mobile No
        <input type='number' name='managex_mobile' className='form-control'></input>
        Email
        <input type='text' name='managex_email' className='form-control'></input>
        Photo
        <input type='file' name='managex_photo' className='form-control'></input>
        <br/>
        <button type='submit' className='btn btn-success'>ADD</button>
    </form>


    
    <h1>Manage Databases</h1>
    
    <h2>Residents</h2>
    
    <table className='table' style={{transform:'scale(0.9)'}}>
      <thead>
          <tr>
            <th>Name </th>
            <th>User ID</th>
            <th>Mobile</th>
            <th>DoorNo</th>
            <th>Floor</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
      </thead>
      <tbody>
    {

servu.map((dd,ii)=>{
        
        return(
          <>
          
          <tr>
          <td>{servu[ii].userx_name}</td>
          <td>{servu[ii].userx_id}</td>
          <td>{servu[ii].userx_mobile}</td>
          <td>{servu[ii].userx_door_no}</td>
          <td>{servu[ii].userx_floor}</td>
          <td><a href={`/edituser/${servu[ii]._id}`}>Edit</a></td>
          <td><a href={`/delete/UserDB/${servu[ii]._id}/${window.location.href.slice(28)}`}>Delete</a></td>
          </tr>
          </>
        )
      })
    }
    </tbody>
    </table>


    <br/>
    <h2>ManagingStaff</h2>
    <table className='table' style={{transform:'scale(0.9)'}}>
      <thead>
          <tr>
            <th>Name </th>
            <th>ID</th>
            <th>Designation</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
      </thead>
      <tbody>
    {

servum.map((dd,ii)=>{
        
        return(
          <>
          
          <tr>
          <td>{servum[ii].managex_name}</td>
          <td>{servum[ii].managex_id}</td>
          <td>{servum[ii].managex_designation}</td>
          <td>{servum[ii].managex_mobile}</td>
          <td>{servum[ii].managex_email}</td>
          <td><a href={`/editmanage/${servum[ii]._id}`}>Edit</a></td>
          <td><a href={`/delete/Manage/${servum[ii]._id}/${window.location.href.slice(28)}`}>Delete</a></td>
          </tr>
          </>
        )
      })
    }
    </tbody>
    </table>

    

    </div>
    <Footer/>
    </>
  )
}

export default Admin