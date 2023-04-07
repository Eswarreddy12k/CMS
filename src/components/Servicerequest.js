import React from 'react'
import './Ringalarmmodal.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Servicerequest(props) {
    const [communityuser,setcommuser]=useState([])
    
    const getcomplaint=()=>{
        axios.get("/userdet/"+props.cuser)
        .then(data => setcommuser(data.data[0].userx_community)).catch(error => console.log('unable to fetch complaints'+error));
      }
      useEffect(() => {
        getcomplaint();
      },[])
    const formroute='https://cms-b.onrender.com/addsrequest/'+props.cuser+"/"+communityuser
    if(props.show){
        return (
          <div className='modal-main'>
              <h1>Service Request</h1>
              <form className='form-group' action={formroute} method='post'>
                  <select className='form-control' name='servicex_category'>
                      <option>--select category--</option>
                      <option>Option1</option>
                      <option>Option2</option>
                      <option>Option3</option>
                      <option>Option4</option>
                  </select>
                  <br/>
                  <select className='form-control' name='servicex_subcategory'>
                      <option>--select sub-category--</option>
                      <option>Option1</option>
                      <option>Option2</option>
                      <option>Option3</option>
                      <option>Option4</option>
                  </select>
                  <br/>
                  <textarea className='form-control' placeholder='Is there Anything More' name='servicex_desc'></textarea>
                  <br/>
                  
                  <div className='modal-buttons'>
              <button className='btn btn-danger' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Cancel</button>
              <button className='btn btn-success' type='submit'>Submit</button>
              </div>
              </form>
              
              
          </div>
        )}
}

export default Servicerequest