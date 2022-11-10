import React from 'react'

function Viewdocuments(props) {
    if(props.show){
        return (
          <div className='modal-main'>
              <h1>View Documents</h1>
              <p>Document1</p>
              <p>Document1</p>
              <p>Document1</p>
              <p>Document1</p>
              <p>Document1</p>
              <div className='modal-buttons'>
              <button className='btn btn-success' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Ok</button>
              </div>
          </div>
        )}
}

export default Viewdocuments