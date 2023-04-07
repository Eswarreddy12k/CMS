import React from 'react'

function Uploaddocuments(props) {
  const formroute='https://cms-b.onrender.com/uploaddoc/'+props.cuser
    if(props.show){
        return (
          <div className='modal-main'>
              <h1>Upload Documents</h1>
              <form className='form-group' action={formroute} method='post' enctype="multipart/form-data">

                    <label for='nameupd'>Name</label>
                  <input type='text' className='form-control' id='nameupd' name='documentx_name'/>
                  <br/>
                  <textarea className='form-control' placeholder='Description' name='documentx_desc'></textarea>
                  <br/>
                  <label for='addimg'>Add Images</label>
                  <input type='file' className='form-control' id='addimg' name='documentx_pdf'/>
                  <br/>

                  <div className='modal-buttons'>
              <button className='btn btn-danger' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Cancel</button>
              <button className='btn btn-success' >Submit</button>
              </div>
      
              </form>
              
              
          </div>
        )}
}

export default Uploaddocuments