import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import './Neighbourhood.css'
import Discussionmodal from './components/Discussionmodal'
import Sellmodal from './components/Sellmodal'
import { useNavigate } from 'react-router-dom'

function Neighbourhood() {
  const [discussionv,setdiscussionv]=useState(false)
  const [sellv,setsellv]=useState(false)
  const navigate=useNavigate()
  function handlebuy(){
    navigate('/Buy')
  }
  function handlediscussions(){
    navigate('/Discussions')
  }
  return (
    <>
      <Header/>
      <Navbar />
      <div id='neighbourhoodid'>
        <br/>
        <div className='discussions'>
        <h1>Discussions</h1>
        <br/>
        <div className='discussion-box'>
        <button className='btn btn-success' onClick={()=>{setdiscussionv(true);document.body.style.overflow='hidden';document.getElementById('neighbourhoodid').style.filter='blur(2px)'}}>Create New Discussion</button>
        <br/><br/>
        <h1>Current Discussions</h1>
        <br/>
        <div className='current-discussions'>
            <button onClick={()=>{handlediscussions()}}>Discussion Name Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas in eleifend ex. Suspendisse tellus massa,  </button>
            <p>Name Date Asked</p>
            <hr/>
            <button onClick={()=>{handlediscussions()}}>Discussion Name Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas in eleifend ex. Suspendisse tellus massa,  </button>
            <p>Name Date Asked</p>
            <hr/>
            <button onClick={()=>{handlediscussions()}}>Discussion Name Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas in eleifend ex. Suspendisse tellus massa,  </button>
            <p>Name Date Asked</p>
            <hr/>
            <button onClick={()=>{handlediscussions()}}>Discussion Name Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, </button>
            <p>Name Date Asked</p>
            <hr/>
            <button onClick={()=>{handlediscussions()}}>Discussion Name Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, </button>
            <p>Name Date Asked</p>
            <hr/>
            <button onClick={()=>{handlediscussions()}}>Discussion Name Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas in eleifend ex. Suspendisse tellus massa,  </button>
            <p>Name Date Asked</p>

        </div>
        </div>
        </div>
        <br></br>
        <div className='products'>

        <h1>Products</h1>
        <p>Buy and Sell Products made by your own community people</p>
        <div className='buysell'>
          <div className='buy'>
            <h2>Buy products made by your community</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet ex eu, egestas pulvinar ligula. Morbi eget mi in turpis feugiat bibendum in non eros. Curabitur ultricies tincidunt faucibus.</p>
            <div className='buysell-button'>
              <button className='btn btn-success' onClick={()=>{handlebuy()}}>Buy</button>
            </div>
          </div>
          <div className='sell'>
            <h2>Sell Products to your community</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eleifend ex. Suspendisse tellus massa, malesuada sit amet ex eu, egestas pulvinar ligula. Morbi eget mi in turpis feugiat bibendum in non eros. Curabitur ultricies tincidunt faucibus.</p>
            <div className='buysell-button'>
              <button className='btn btn-success' onClick={()=>{setsellv(true);document.body.style.overflow='hidden';document.getElementById('neighbourhoodid').style.filter='blur(2px)'}}>List your Item Here</button>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      <Footer />
      <Discussionmodal show={discussionv} event={setdiscussionv}/>
      <Sellmodal show={sellv} event={setsellv}/>
    </>
  )
}

export default Neighbourhood