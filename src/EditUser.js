import React from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { useEffect,useState } from 'react'

function EditUser() {



  const [curruser,setcurruser]=useState(['abbllala'])
  const [userxname,setuserxname]=useState(['aaa'])
  const [servx,setservx]=useState([])

  const getusersxy=()=>{
 axios.get('https://cms-b.onrender.com/gethome',{
    headers:{
      "xaccesstoken":localStorage.getItem("token")
    }}).then((response)=>{
    if(response.data.auth){
        setcurruser(response.data.userid)
        
    }
  })}
  useEffect(() => {
    getusersxy();
  },[])

  
    const getusersx=async()=>{
        await axios.get("https://cms-b.onrender.com/getuserbyid/"+window.location.href.slice(31+4))
        .then(data =>{setservx(data.data);setuserxname(data.data.userx_name);} ).catch(error => console.log('abc'+error));
        
        
      }
      useEffect(() => {
        getusersx();
        
        //console.log(servx)
      },[])
  return (
    <>
    <Header/>
    
    
    <div style={{transform:"scale(0.9)"}}>

<h1>Add A User</h1>
    <form action={`/updateuserx/${window.location.href.slice(31)}/${curruser}`} method='post' className='form-group' style={{transform:"scale(0.9)"}}>
        User Name
        <input type='text' name='userx_name' className='form-control' value={userxname} onChange={e=>{setuserxname(e.target.value)}}></input>
        User ID 
        <input type='text' name='userx_id' className='form-control'  placeholder={servx.userx_id}></input>
        User Community
        <input type='text' name='userx_community' className='form-control'  placeholder={servx.userx_community}></input>
        User Mobile 
        <input type='text' name='userx_mobile' className='form-control' placeholder={servx.userx_mobile}></input>
        User Door No 
        <input type='text' name='userx_door_no' className='form-control'  placeholder={servx.userx_door_no}></input>
        User Floor
        <input type='text' name='userx_floor' className='form-control'  placeholder={servx.userx_floor}></input>
        <br/>
        <button className='btn btn-success' type='submit'>Submit</button>
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default EditUser