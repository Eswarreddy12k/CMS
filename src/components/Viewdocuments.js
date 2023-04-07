import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Viewdocuments(props) {
  const [docs,setdocs]=useState(['NA'])
  const getdocs=()=>{
    axios.get("https://cms-b.onrender.com/getdocuments/pdf/"+props.cuser)
    .then(data => setdocs(data.data)).catch(error => console.log('abc'+error));
  }
  useEffect(() => {
    getdocs();
  },[])
  
  const [cdoc,setcdoc]=useState('')
    //console.log(`./uploads/images/${cdoc}`)
    if(props.show){
        return (
          <div className='modal-main'>
              <h1>View Documents</h1>
              <embed
    src={`./uploads/images/${cdoc}`}
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"
    class="embed-responsive-item"
></embed>
              <div className='modal-buttonsx'>
              {
                docs.map((dd,ii)=>{
                    return(
                      <button onClick={()=>{setcdoc(docs[ii].documentx_pdf)}} className='btn btn-success'>{docs[ii].documentx_name}</button>
                    )
                })
              }
              </div>
              <br/>
              <div className='modal-buttons'>
              
              <button className='btn btn-success' onClick={()=>{props.event(false);document.body.style.overflow='visible';document.getElementById('community').style.filter='none'}}>Ok</button>
              </div>
          </div>
        )}
}

export default Viewdocuments