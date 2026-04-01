import './App.css';
import Button from "@mui/material/Button";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Settings from "./Pages/Settings";
import Compony from "./Pages/Compony";
import Acc from './Pages/Functionalities/Acc';
import Contact from './Pages/ContactForm/Contact';
import Progress from './Pages/ProgressBar/progress';


//Accordian Data
const data = [
  {
    title: "Section 1",
    content: "This is the content snippet for section 1.",
  },
  {
    title: "Section 2",
    content: "This is the content snippet for section 2.",
  },
  {
    title: "Section 3",
    content: "This is the content snippet for section 3.",
  },
];
//Accordian Data

function App() {

    /*For Setting State in react*/
    /*
       * text holds the current input value
       * setText updates it
    */
    //const [text, setText] = useState("");
   /*
     * Declares a constant variable called ShowAlert
     * The variable stores a function
     * const means you can’t reassign it to something else
  */
  //  const ShowAlert=(value)=>{
  //       alert("You enterd"+value);
  //   }
  const drawerWidth = 0;
  return (
  //   <div className="container">
  //   <h1>Demo UI Application</h1>
  //   <p>This is a sample UI interface for demo purposes.</p>

  //   <div className="card">
  //     <input type="text" placeholder="Enter your name" onChange={(e) => setText(e.target.value)} />
  //     <Button variant="contained" onClick={() => ShowAlert(text)}>Alert Button</Button>
  //   </div>
  // </div>
  
  <Box sx={{ display: "flex" }}>
  <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, ml: `${drawerWidth}px`, }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/compony" element={<Compony />} />
          <Route path="/acc" element={<Acc items={data} />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/progress" element={<Progress/>} />
        </Routes>
     </Box>
  </Box>
  );
}

export default App;



/*Summary*/
/*
  1)Store input value (USING usestate)
   const [text, setText] = useState(""); 
   => text holds the current input value
   => setText updates it (when changes occures)

  2)Read input value 
    onChange={(e) => setText(e.target.value)}
   
    * e.target.value gets what the user types
    * Updates state every time input changes
    
  3)Pass value to function
     onClick={() => ShowAlert(text)}

    * Arrow function prevents immediate execution
    * Passes text as a parameter
    
  4)Receive parameter
  const ShowAlert = (value) => {
  alert(value);
    };

    * value receives the input text
    * Displays it in the alert box
*/
/*Summary*/