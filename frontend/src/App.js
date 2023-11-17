//import supabase from "./config/supabaseClient";
import "../src/css/App.css";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Loginpage from "./pages/login";
import Signup from "./pages/signup";
import Home from "./components/home";
import AddPin from "./components/AddPin";
import Profile from "./pages/profile";
//import Auth from "./components/Auth";
//import Avatar from "./components/Avatar";
//import Account from "./components/Account";


function App(){

  // const [session, setSession] = useState(null)

  // useEffect(() => {
  //   setSession(supabase.auth.session())
  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])

  return(
    
      <Router>
        <div className="App">
      {/* <div>
        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </div> */}
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addpin" element={<AddPin />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        </div>
      </Router>
    
  )
}

export default App