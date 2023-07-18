/* eslint-disable jsx-a11y/anchor-is-valid */
//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  // const [switchText, setSwitchText] = useState('light');

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark mode has been enabled", "success");
      // setSwitchText('light');
      //document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 1000);

      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 2500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // setSwitchText('dark');
      //document.title = "TextUtils - Light Mode";
    }
  } 

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} /*switchText={switchText}*//>
      
      <Alert alert = {alert}/>

      <div className="container my-3">

      {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            {<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}
            {/* </Route>
          </Routes> */}
        </div>

      {/* </Router> */}
      
    </>
  );
}

export default App;
