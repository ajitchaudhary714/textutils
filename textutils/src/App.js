import "./App.css";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
 import TextForm from "./Component/TextForm";
import React, { useState } from "react";
import Page from "./Component/Page";
 import Memo from "./Component/Memo";
 import Reference from "./Component/Reference";
import NoteState from './Context/Nodes/NoteState';
import AddFile from "./Component/AddFile";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
    {/* <NoteState> */}
      <Navbar name="textutils" mode={mode} toggleMode={toggleMode} />
      <div className="container"> 
      <NoteState>
         <TextForm heading="Enter the text to Analyze below" />
        <About />
        <br />
        <Page />
        <br />
        <div>
          <Memo />
        </div>
        <br />
         <div>
          <Reference />
        
        </div>
        <AddFile />
 </NoteState>
        </div> 
 {/* <AddFile />
 </NoteState> */}
  
      
    </>
  );
}
export default App;
