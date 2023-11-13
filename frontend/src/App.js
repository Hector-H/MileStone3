import "../src/css/App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Loginpage from "./pages/login";
import Signup from "./pages/signup";
import Home from "./components/home";
import AddPin from "./components/AddPin";

function App(){
  return(
    <div className="App">
      <Router>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addpin" element={<AddPin />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App