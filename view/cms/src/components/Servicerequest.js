import React from 'react'
import './Ringalarmmodal.css'

function Servicerequest(props) {
    if(props.show){
        return (
          <div className='modal-main'>
              <h1>Service Request</h1>
              <form className='form-group'>
                  <select className='form-control'>
                      <option>--select category--</option>
                      <option>Option1</option>
                      <option>Option2</option>
                      <option>Option3</option>
                      <option>Option4</option>
                  </select>
                  <br/>
                  <select className='form-control'>
                      <option>--select sub-category--</option>
                      <option>Option1</option>
                      <option>Option2</option>
                      <option>Option3</option>
                      <option>Option4</option>
                  </select>
                  <br/>
                  <textarea className='form-control' placeholder='Is there Anything More'></textarea>
                  <br/>
      
              </form>
              
              <div className='modal-buttons'>
              <button className='btn btn-danger' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Cancel</button>
              <button className='btn btn-success' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Submit</button>
              </div>
          </div>
        )}
}

export default Servicerequest