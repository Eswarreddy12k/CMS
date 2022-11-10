import React from 'react'

function Uploaddocuments(props) {
    if(props.show){
        return (
          <div className='modal-main'>
              <h1>Upload Documents</h1>
              <form className='form-group'>
                    <label for='nameupd'>Name</label>
                  <input type='text' className='form-control' id='nameupd'/>
                  <br/>
                  <textarea className='form-control' placeholder='Description'></textarea>
                  <br/>
                  <label for='addimg'>Add Images</label>
                  <input type='file' className='form-control' id='addimg'/>
                  <br/>
      
              </form>
              
              <div className='modal-buttons'>
              <button className='btn btn-danger' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Cancel</button>
              <button className='btn btn-success' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Submit</button>
              </div>
          </div>
        )}
}

export default Uploaddocuments