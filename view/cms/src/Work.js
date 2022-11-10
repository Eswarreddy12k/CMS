import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Work() {
  return (
    <>
        <Header/>
        <form action='/uploadwork' method='post'>
        <select className='form-control' name='workname' id='workname'>
                <option disabled selected>Select Job</option>
                <option>Option1</option>
                <option>Option2</option>
                <option>Option3</option>
                <option>Option4</option>
            </select>
            <br/>
            <select className='form-control' name='areaname' id='areaname'>
                <option disabled selected>Prefered area</option>
                <option>Option1</option>
                <option>Option2</option>
                <option>Option3</option>
                <option>Option4</option>
            </select>
            <br/>
        <button type='submit'>Submit</button>
        </form>
        <Footer/>
    </>
  )
}

export default Work