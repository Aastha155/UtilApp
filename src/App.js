// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {Router} from "react-router-dom"


// import {
//   Switch,
//   Routes,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark is enabled or not
  const [alert, setAlert] = useState(null);  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  

  return (
    
      // {/* <Navbar title = 'UtilApp' aboutText = "About UtilApp" /> */}
      // {/* <Navbar title = 'UtilApp'/> */}
      // {/* <Navbar/> */}

     <div>
       <Navbar title="UtilApp" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      {/* /users --> Components 1
      /users/home --> Components 2 */}
          {/* <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/'/>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
     </div>
    
     
    
  );
}
export default App
