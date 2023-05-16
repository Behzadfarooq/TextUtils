// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Routes
// } from "react-router-dom";
function App(){
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({ message: '', type: 'success'});

  useEffect(() => {
    showAlert(`${mode} mode has been enabled`, "success");
  }, [mode])

  function showAlert(message, type) {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: '', type: 'success' });
    }, 1500);
  }

  return (
    <div className="container my-3">
     <Alert message={alert?.message} type={alert?.type}/>
    <div style={{ backgroundColor: mode === "dark" ? "#042743" : "white"}}>
    {/* <Router> */}
     <Navbar title="textUtils" mode={mode} toggleMode={() => setMode(mode === "light" ? "dark" : "light")}/>
     <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
      {/* <Routes> */}
        {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> } /> */}
          {/* <Route exact path="/About" element={<About/>} /> */}
          {/* <Route path=":id" element={<UserProfile />} /> */}
      {/* </Routes> */}
      </div>
    {/* </Router> */}
    </div>
  );
}
export default App;