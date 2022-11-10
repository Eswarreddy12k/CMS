import React from 'react'

function Discussionmodal(props) {
    if(props.show){
    
        return (
          
          <>
          <div className='modal-main'>
            <label>Enter Query/Discussion Topic Here</label>
            <br></br>
            <textarea className='form-control'/>
            <br></br>
            <div className='modal-buttons'>
            <button className='btn btn-danger' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('neighbourhoodid').style.filter='none'}}>Cancel</button>
            <button className='btn btn-success' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('neighbourhoodid').style.filter='none'}}>Ask</button>
          </div>
          </div>
          </>
        )}
}

export default Discussionmodal