import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [ mode, setMode ] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
        },2000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enabled!","success");
      document.title="TextUtils-DarMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled!","success");
      document.title="TextUtils-LightMode";

    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      {/* {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}>
                 

           </Route>
          
        
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode} />}>
          

          </Route>
        </Routes> */ }

        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode}/>

        
        {/* // } */}

        </div>
      
  
      {/* // </Router> */}
    </>
  );
}

export default App;
