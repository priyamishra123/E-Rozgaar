// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MyDetails from './Components/MyDetails';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Helpdesk from './Components/Helpdesk';
import Registration from './Components/Registration';
import Registero from './Components/Registero';

import Login_page from './Components/Login_page';
import Login_owner from './Components/Login_owner';
import Dashboard from './Components/Dashboard';
import Dashboard_labour from './Dashboard_labour'

import {
  BrowserRouter as Router,
      Routes,
  Route,

} from "react-router-dom";
import Work_available from './Components/Work_available';

function App() {
  const[mode,setMode]=useState('light');
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  
  return (
    <>
    <Router>
     

    <Navbar mode={mode} toggleMode={toggleMode}/>
   <div>
   <Routes>
          <Route exact path="/about" element={<MyDetails mode={mode}/>} ></Route>
          <Route exact path="/Login" element={<Login mode={mode}/>} ></Route>
          <Route exact path="/Register" element={<Register mode={mode}/>} ></Route>
          <Route exact path="/" element={<Home mode={mode}/>} ></Route>
          <Route exact path="/helpdesk" element={<Helpdesk mode={mode}/>} ></Route>
          <Route exact path="/Registration" element={<Registration mode={mode}/>} ></Route>
          <Route exact path="/Registero" element={<Registero mode={mode}/>} ></Route>
          <Route exact path="/Dashboard_labour" element={<Dashboard_labour mode={mode}/>} ></Route>
          <Route exact path="/Login_page" element={<Login_page mode={mode}/>} ></Route>
          <Route exact path="/Login_owner" element={<Login_owner mode={mode}/>} ></Route>
          <Route exact path="/Dashboard" element={<Dashboard mode={mode}/>} ></Route>
          <Route exact path="/Work_available" element={<Work_available mode={mode}/>} ></Route>
    </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
