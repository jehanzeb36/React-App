// import '.App.css';
// import { useState, useState } from 'react';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
// ❌ ye galat import hai, hata do
// import { useFormState } from 'react-dom'; 

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);  //Alert is an object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121d58ff';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode had been enabled", "success");
    }
  }

  return (
    <>

    {/* /users ---> Component 1
    /users ---> Componment 2  */}
      {/* <Router> */}
        <Navbar titles="TextUtils" AboutText="About us" btn="Login" home="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze Below" mode={mode}/>} /> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze Below" mode={mode}/>
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
