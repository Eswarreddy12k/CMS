import './App.css';
import { BrowserRouter, Routes, Route, UNSAFE_RouteContext } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import 'font-awesome/css/font-awesome.min.css'
import Hire from './Hire';
import Community from './Community';
import Neighbourhood from './Neighbourhood';
import Services from './Services';
import Generatepass from './Generatepass';
import EmergencyNumbers from './EmergencyNumbers';
import Buy from './Buy';
import Discussions from './Discussions';
import Security from './Security';
import Notifications from './Notifications';
import Admin from './Admin';
import Work from './Work';
import Loginsuccess from './Loginsuccess';
import { useState } from 'react';
import Availablework from './Availablework';
import axios from 'axios';
import Navbar from './Navbar';
import HeadAdmin from './HeadAdmin';
import Manage from './Manage';
import EditUser from './EditUser';


function App(props) {
  const [logx,setlogx]=useState(false)
  const [curruser,setcurruser]=useState(['abbllala'])
  axios.get('https://cms-b.onrender.com/gethome',{
    headers:{
      "xaccesstoken":localStorage.getItem("token")
    }}).then((response)=>{
    if(response.data.auth){
        setcurruser(response.data.userid)
        setlogx(true)
    }
    else{
      setlogx(false)
    }
  })
  const [prohome,setprohome]=useState('');
  axios
    .get("https://cms-b.onrender.com/isloggedin")
    .then(data => setprohome(data.data))

    .catch(error => console.log('abc'+error));

  
  const [userid1,setuserid1]=useState('');
  
  if(logx===true){
    const homepath="/home/"+curruser
    const adminpath="/admin/"+curruser
    const managepath="/manage/"+curruser

    //console.log(homepath)
  return (
    
    
    <div>
      <div>        
        <Routes>
          
          <Route path="/" element={<Login setprohome={setprohome}/>} />
          
          <Route path={homepath} element={<Home userid1={userid1} setuserid1={setuserid1} setprohome={setprohome}/>} />
          
          {prohome!=window.location.href.slice(27) &&
          <Route path="/:ab/:ab" element={<Login/>} /> 
          }
          
          {(prohome!='') && 
          <>
          <Route path="/hire" element={<Hire />} />
          <Route path="/Community" element={<Community cuser={prohome}/>} />
          <Route path="/Neighbourhood" element={<Neighbourhood />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/generatepass" element={<Generatepass cuser={prohome}/>} />
          <Route path="/EmergencyNumbers" element={<EmergencyNumbers cuser={prohome}/>} />
          <Route path="/Buy" element={<Buy/>} />
          <Route path="/Discussions" element={<Discussions/>} />
          
          <Route path='/Notifications' element={<Notifications cuser={prohome}/>}/>
          
          
          <Route path="/loginsuccess" element={<Loginsuccess/>} />
          <Route path="/availablework/:abb" element={<Availablework/>} />
          </>
          }
          
          {(prohome=='') && 
          <>
          <Route path="/work" element={<Work/>} />
          <Route path="/:a" element={<Login/>} />
          </>

          }
          <Route path={adminpath} element={<Admin/>} />
          <Route path='/edituser/:uid' element={<EditUser/>}/>
          <Route path={managepath} element={<Manage/>} />
          
          
          <Route path="/work" element={<Work/>} />
          {curruser=="admin" &&
            <Route path="/headadmin" element={<HeadAdmin/>} />

          }
          
          <Route path="/security" element={<Security/>} />
          <Route path="/abxnavbar" element={<Navbar />} />
          

          
          

        </Routes>
      </div>
      
    </div>
    
    
  )}
  else{
    return(
      <div>
        <div>
        <Routes>
        <Route path="/work" element={<Work/>} />
         <Route path="/:a/:aa" element={<Login/>} />
         <Route path="/:a" element={<Login/>} />
         <Route path="/" element={<Login/>} />
   </Routes>

        </div>
      </div>
    
    )
  }
}

export default App;
