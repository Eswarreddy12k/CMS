import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Complaintmodal(props) {
    
    const [communityuser,setcommuser]=useState([])
    
    const getcomplaint=()=>{
        axios.get("/userdet/"+props.cuser)
        .then(data => setcommuser(data.data[0].userx_community)).catch(error => console.log('unable to fetch complaints'+error));
      }
      useEffect(() => {
        getcomplaint();
      },[])
      const formroute='/addcomplaint/'+props.cuser+"/"+communityuser
    if(props.show){
  return (
    <div className='modal-main'>
        <h1>Raise Complaint</h1>
        <form className='form-group' action={formroute} method='post' enctype="multipart/form-data">
            <select className='form-control' name='complaintx_category'>
                <option>--select category--</option>
                <option>Option1</option>
                <option>Option2</option>
                <option>Option3</option>
                <option>Option4</option>
            </select>
            <br/>
            <select className='form-control' name='complaintx_subcategory'>
                <option>--select sub-category--</option>
                <option>Option1</option>
                <option>Option2</option>
                <option>Option3</option>
                <option>Option4</option>
            </select>
            <br/>
            <textarea className='form-control' placeholder='Is there Anything More' name='complaintx_desc'></textarea>
            <br/>
            <label for='addimg'>Add Images</label>
            <input type='file' className='form-control' id='addimg' name='complaintx_img'/>
            <br/>
            
            
            <div className='modal-buttons'>
            <button type='submit' className='btn btn-success'>Submit</button>
        <button className='btn btn-danger' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Cancel</button>
        
        </div>
        </form>
        
        
    </div>
  )}
}

export default Complaintmodal