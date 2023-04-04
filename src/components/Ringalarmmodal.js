import React from 'react'
import './Ringalarmmodal.css'

function Ringalarmmodal(props) {
    if(props.show){
    
  return (
    
    <>
    <div className='modal-main'>
      <label>For confirmation Type Your Password Here:</label>
      <br></br>
      <input type='text' className='form-control'/>
      <br></br>
      <div className='modal-buttons'>
      <button className='btn btn-success' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('homeid').style.filter='none'}}>Cancel</button>
    <button className='btn btn-danger' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('homeid').style.filter='none'}}>Confirm Alarm</button>
    </div>
    </div>
    </>
  )}
}

export default Ringalarmmodal