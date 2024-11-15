import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "./dropdown-menu";
import { Button } from "./button";

function DropMyMenu(){

    return(
        <div style={{position:"fixed", left:"1%", top:"2%"}}>
        <DropdownMenu>
          <DropdownMenuTrigger style={{fontSize:"135%", color:"white"}} className="bg-indigo-500">Navigation Menu</DropdownMenuTrigger>
          <DropdownMenuContent style={{fontSize:"125%" }}  className="bg-indigo-300">
              <DropdownMenuItem  className="bg-indigo-300">
                <Button style={{fontSize:"120%" }} variant="secondary"  className="bg-indigo-500">
                  <a style={{color:"white"}} href="/Locations.jsx">Locations</a>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem  className="bg-indigo-300">
                <Button style={{fontSize:"120%" }} variant="secondary"  className="bg-indigo-500">
                  <a style={{color:"white"}} href="/Dashboard.jsx">Dashboard</a>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem  className="bg-indigo-300">
                <Button style={{fontSize:"120%" }} variant="secondary"  className="bg-indigo-500">
                  <a style={{color:"white"}} href="/Home.jsx">Sign Out</a>
                </Button>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
}

export default DropMyMenu;