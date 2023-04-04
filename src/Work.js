import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Work() {
  return (
    <>
        <Header/>
        
        <div style={{transform:"scale(0.9)"}}>
        <h1>Work</h1>
        
        <form action='https://cms-f.onrender.com/uploadwork' method='post'>
        <br/>
          <input type='text' placeholder='Name' className='form-control' name='work_name'/>
          <br/>
          <input type='Number' placeholder='Mobile Number' className='form-control' name='work_mobile'/>
          <br/>
        <select className='form-control' name='work_work' id='workname'>
                <option disabled selected>Select Job</option>
                <option>Maid</option>
                <option>Driver</option>
                <option>Option4</option>
                <option>Option4</option>
            </select>
            <br/>
            <select className='form-control' id='areaname' name='work_prefered_area'>
                <option disabled selected>Prefered area</option>
                <option>Area1</option>
                <option>Area2</option>
                <option>Area3</option>
                <option>Area4</option>
            </select>
            <br/>
        <button type='submit' className='btn btn-success'>Submit</button>
        </form>
        </div>
        <Footer/>
    </>
  )
}

export default Work