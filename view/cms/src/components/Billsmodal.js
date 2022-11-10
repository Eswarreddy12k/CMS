import React from 'react'
import './Ringalarmmodal.css'

function Billsmodal(props) {
    if(props.show){
  return (
    <div className='modal-main'>
        <h1>Bill Name</h1>
        <p>Particulars</p>
        <p>Particulars</p>
        <p>Particulars</p>
        <p>Particulars</p>
        <p>Particulars</p>
        <p>Particulars</p>
        <div className='modal-buttons'>
        
        <button className='btn btn-success' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Ok</button>
        </div>
    </div>
  )}
}

export default Billsmodal