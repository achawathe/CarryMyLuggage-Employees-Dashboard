import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Dashboard from './assets/Dashboard';
import './App.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button"


function App() {

  return (

    <BrowserRouter>

      <div style={{position:"fixed", left:"1%", top:"2%"}}>
        <DropdownMenu>
          <DropdownMenuTrigger style={{fontSize:"120%" }}>Navigation Menu</DropdownMenuTrigger>
          <DropdownMenuContent style={{fontSize:"105%" }}>
              <DropdownMenuItem>
                <Button>
                  <Link style={{color:"black"}} to="/">Home</Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button>
                  <Link style={{color:"black"}}to="/Dashboard">Dashboard</Link>
                </Button>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      

      <div>

        <Routes>
          <Route path="/" element = {<this/>} />
          <Route path="/Dashboard" element = {<Dashboard/>} />
        </Routes>

      </div>

    </BrowserRouter> 

  )
}

export default App
