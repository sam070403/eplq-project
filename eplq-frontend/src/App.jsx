import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Header from './components/Header'

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Footer from "./components/Footer";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

export default function App(){
  return(
    <Router>
      <Header/>
      <div>
      
        <Routes>
           <Route  path="/" element={<Home />}/>
           <Route  path="/admin" element={<Admin />}/>
           <Route  path="/user" element={<User/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/signin" element={<Signin/>}/>
           <Route path="/signup" element={<Signup/>}/>

        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}