// import { useState } from "react";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Hamburger from "hamburger-react";
// function App() {
//   const [isOpen,setIsOpen] = useState(false);
//   const [value, setValue] = useState('');
//   const [sessions, setSessions] = useState([]);
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('Submitted:', value);

//     const response = await fetch('http://127.0.0.1:5000/api/autotest', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ instructions: value }),
//     });

//     const data = await response.json();
//     const newSession = {
//       input: value,
//       seleniumCode: data.selenium_code,
//       output: data.output,
//       error: data.error,
//     };

//     console.log("--------------------------------------------",
//                 newSession,
//                 "--------------------------------------------");

//     const updatedSessions = [...sessions, newSession];
//     setSessions(updatedSessions);
//     localStorage.setItem('sessions', JSON.stringify(updatedSessions));
//     setValue('');
//   };
//   const toggleHandler = () => {
//     setIsOpen(!isOpen);
//   }
//   return (
//     <div>
//       <div style={{width:"100%",height:"60px",background:"#1134A6",color:"white",boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:"center"}} className="header">
//         <Hamburger toggle={setIsOpen} size={20} />
//         <span style={{height:"60px",lineHeight:"60px",fontSize:"25px",marginLeft:"20px"}}>Testing Co-Pilot</span>
//       </div>
//       {isOpen && (<Sidebar toggleOpen = {toggleHandler}/>)}
//       <form style={{width:"65%",display:"flex",flexDirection:"column",position:"absolute",top:"60%",left:"50%",transform:"translate(-50%,-50%)"}}>
//         <span style={{height:"250px",border:"2px solid black",borderRadius:"10px",marginBottom:"20px"}} type="text" id="output"></span>
//         <input value={value} onChange={handleChange} style={{height:"60px",borderRadius:"10px",marginBottom:"20px"}} type="text" id="input" />
//         <button type="submit" onClick={handleSubmit} style={{height:"50px",background:"#1134A6",border:"none",color:"white",borderRadius:"10px",cursor:"pointer"}}>SUBMIT</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Hamburger from "hamburger-react";
import './App.css';  // Import the CSS file

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [sessions, setSessions] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitted:', value);

    const response = await fetch('http://127.0.0.1:5000/api/autotest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ instructions: value }),
    });

    const data = await response.json();
    const newSession = {
      input: value,
      seleniumCode: data.selenium_code,
      output: data.output,
      error: data.error,
    };

    console.log("--------------------------------------------",
                newSession,
                "--------------------------------------------");

    const updatedSessions = [...sessions, newSession];
    setSessions(updatedSessions);
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
    setValue('');
  };

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="header">
        <Hamburger toggle={setIsOpen} size={20} />
        <span className="header-title">Testing Co-Pilot</span>
      </div>
      {isOpen && (<Sidebar toggleOpen={toggleHandler} />)}
      <form className="form">
        <span className="output-box" type="text" id="output"></span>
        <input value={value} onChange={handleChange} className="input-box" type="text" id="input" />
        <button type="submit" onClick={handleSubmit} className="submit-button">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
