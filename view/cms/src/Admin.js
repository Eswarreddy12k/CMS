import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Admin() {
  return (
    <>
    <Header/>
    <form action='/addannouncement' method='post' className='form-group'>
        Name
        <input type='text' name='annname' id='annname' className='form-control'></input>
        Description
        <textarea name='anndesc' className='form-control'></textarea>
        <button type='submit' className='btn btn-secondary'>ADD</button>

    </form>
    <Footer/>
    </>
  )
}

export default Admin