import React, { useState,useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'


function Manage() {
    const [guser,setgusers]=useState([])
    const [complaint,setcomplaint]=useState([])
    const [serv,setserv]=useState([])
    const getusers=()=>{
        axios.get("/getusers/"+window.location.href.slice(29))
        .then(data => setgusers(data.data)).catch(error => console.log('abc'+error));
      }
      useEffect(() => {
        getusers();
      },[])

      const getcomplaint=()=>{
        axios.get("/getcomplaint/"+window.location.href.slice(29))
        .then(data => setcomplaint(data.data)).catch(error => console.log('unable to fetch complaints'+error));
      }
      useEffect(() => {
        getcomplaint();
      },[])


      const getserv=()=>{
        axios.get("/getservice/"+window.location.href.slice(29))
        .then(data => setserv(data.data)).catch(error => console.log('unable to fetch complaints'+error));
      }
      useEffect(() => {
        getserv();
      },[])

    const postroute='/postbills/'+window.location.href.slice(29)
  return (
    <>
    <Header/>
    

    <div style={{transform:'scale(0.9)'}}>
    <h1>Residents</h1>
    
    <table className='table' style={{transform:'scale(0.9)'}}>
      <thead>
          <tr>
            <th>Name </th>
            <th>User ID</th>
            <th>Mobile</th>
            <th>DoorNo</th>
            <th>Floor</th>
          </tr>
      </thead>
      <tbody>
    {

      guser.map((dd,ii)=>{
        
        return(
          <>
          
          <tr>
          <td>{guser[ii].userx_name}</td>
          <td>{guser[ii].userx_id}</td>
          <td>{guser[ii].userx_mobile}</td>
          <td>{guser[ii].userx_door_no}</td>
          <td>{guser[ii].userx_floor}</td>
          </tr>
          </>
        )
      })
    }
    </tbody>
    </table>

    <div>
    <h1>Service Requests</h1>
    <div className="containerx">
    {
      serv.map((dd,ii)=>{
        return(
          <>
            <div className="card" style={{transform:'scale(0.9)'}}>
            
            <div className="card-body">
              <span className="tag tag-teal">Service Request</span>
              <br/>
              <h4>
                Name:{serv[ii].servicex_user}
              </h4>
              
              <h6>
                Category:{serv[ii].servicex_category}
              </h6>
              <h6>
                Sub-Category{serv[ii].servicex_subcategory}
              </h6>
              
              <div className="user">
                
                <div className="user-info">
                  
                  <small>Description:{serv[ii].servicex_desc}</small>
                  
                </div>
              </div>
              
              
  
            </div>
            
              
              
            </div>
          </>
        )
      })
    }
    </div>
    </div>
    

    <div>
    <h1>Complaints</h1>
    <div className="containerx">
    {
      complaint.map((dd,ii)=>{
        return(
          <div className="card" style={{transform:'scale(0.9)'}}>
            
            <div className="card-body">
              <span className="tag tag-teal">Complaint</span>
              <br/>
              <h4>
                Name:{complaint[ii].complaintx_user}
              </h4>
              
              <h6>
                Category:{complaint[ii].complaintx_category}
              </h6>
              <h6>
                Sub-Category{complaint[ii].complaintx_subcategory}
              </h6>
              
              <div className="user">
                
                <div className="user-info">
                  
                  <small>Description:{complaint[ii].complaintx_desc}</small>
                  
                </div>
              </div>
              
              
  
            </div>
            <div className='cardlink'>
              <h5>Image</h5>
  
              </div>
              <div className="card-header">
              <img src={`../uploads/images/${complaint[ii].complaintx_img}`} alt="rover" />
            </div>
              
            </div>
        )
      })
    }
    </div>
    </div>
    




    <h1>Add Bills</h1>
    <div style={{transform:'scale(0.9)'}}>
    <form action={postroute} className='form-group' method='post' >
        
        <select className='form-control' name='billsx_user'>
            <option>Select User</option>    
            {
                guser.map((dd,ii)=>{
                    return(
                        <option>{guser[ii].userx_name}</option>
                    )
                })
            }
            
        </select>

        <input type='number' name='billsx_rent' placeholder='Rent' className='form-control'/>

        <input type='number' name='billsx_amenity' placeholder='Amenity' className='form-control'/>
        <input type='number' name='billsx_others' placeholder='Others' className='form-control'/>
        <input type='number' name='billsx_electricity' placeholder='Electricity' className='form-control'/>
        <input type='number' name='billsx_water' placeholder='Water' className='form-control'/>
        <input type='number' name='billsx_gas' placeholder='Gas' className='form-control'/>
        <input type='number' name='billsx_othersothers' placeholder='Others_Others' className='form-control'/>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <button type='submit' className='btn btn-success'>Submit</button>
        </div>
        
    </form>
    </div>


    </div>
    <Footer/>
    </>
  )
}

export default Manage