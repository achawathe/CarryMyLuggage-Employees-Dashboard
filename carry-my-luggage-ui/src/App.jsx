import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Dashboard from './assets/Dashboard';
import Home from './assets/Home';
import Login from './assets/Login';
import Signup from './assets/Signup';
import './App.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button"


function App() {

  return (

    <BrowserRouter>

      <div style={{position:"fixed", left:"1%", top:"2%"}}>
        <DropdownMenu>
          <DropdownMenuTrigger style={{fontSize:"135%", color:"white"}} className="bg-indigo-500">Navigation Menu</DropdownMenuTrigger>
          <DropdownMenuContent style={{fontSize:"125%" }}  className="bg-indigo-300">
              <DropdownMenuItem  className="bg-indigo-300">
                <Button style={{fontSize:"120%" }} variant="secondary"  className="bg-indigo-500">
                  <Link style={{color:"white"}} to="/">Home</Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem  className="bg-indigo-300">
                <Button style={{fontSize:"120%" }} variant="secondary"  className="bg-indigo-500">
                  <Link style={{color:"white"}}to="/Dashboard">Dashboard</Link>
                </Button>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>

        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/Login" element = {<Login/>} />
          <Route path="/Signup" element = {<Signup/>} />
          <Route path="/Dashboard" element = {<Dashboard/>} />
        </Routes>

      </div>

    </BrowserRouter> 

  )
}

export default App
