import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import './Discussions.css'

function Discussions() {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='disc'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti eos ex tempore inventore. Dolorum est,?</h1>
        <br/>
        <form className='form-group'>
            <textarea className='form-control'></textarea>
            <br/>
            <div className='disc-button'>
            <button className='btn btn-success'>Post Reply</button>
            </div>
        </form>
        <br/><br/>
        <h1>Replies</h1>
        
        <br/>
        <h2>Name</h2>
        <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti </p>
        <div className='reply1'>
            <h2>Name</h2>
            <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti </p>
            <div className='reply2'>
            <h2>Name</h2>
            <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti </p>
            
        </div>
        </div>
        <br/>
        <h2>Name</h2>
        <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti </p>
        <div className='reply1'>
            <h2>Name</h2>
            <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti </p>
            <div className='reply2'>
            <h2>Name</h2>
            <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti </p>
            <div className='reply3'>
            <h2>Name</h2>
            <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti </p>
        </div>
        </div>
        </div>
        <br/>
        <h2>Name</h2>
        <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti </p>
        <div className='reply1'>
            <h2>Name</h2>
            <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione illo deleniti </p>
            
        </div>
    </div>


    <Footer/>



    </>
  )
}

export default Discussions