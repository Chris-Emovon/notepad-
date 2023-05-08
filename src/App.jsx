import { useState } from 'react'
import Noteheader from "./Noteheader"
import './App.css'
import Notes from './Notes'
import NewNote from './NewNote'
import { BrowserRouter as Router, 
Route, Routes, Link } from "react-router-dom";

function App() {
  
  return (
    <Router>
          <div className="App">
            <Link to="/"></Link>
            <Routes>
              <Route path="/" element={
                <div>
                  <Noteheader />
                  <Notes />  
                </div>
              }></Route>
              <Route path="/NewNote" element={<NewNote />}></Route>
            </Routes>
          </div>
    </Router>
  )
}

export default App
