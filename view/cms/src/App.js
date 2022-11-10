import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  
  return (
    <div>
      <div>        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Neighbourhood" element={<Neighbourhood />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/generatepass" element={<Generatepass />} />
          <Route path="/EmergencyNumbers" element={<EmergencyNumbers/>} />
          <Route path="/Buy" element={<Buy/>} />
          <Route path="/Discussions" element={<Discussions/>} />
          <Route path="/security" element={<Security/>} />
          <Route path='/Notifications' element={<Notifications/>}/>
          <Route path="/admin" element={<Admin/>} />
          <Route path="/work" element={<Work/>} />
          <Route path='/homes' component={() => { 
     window.location.href = 'http://localhost:5000/homes'; 
     return null;
}}/>


        </Routes>
      </div>
    </div>
    
  );
}

export default App;
