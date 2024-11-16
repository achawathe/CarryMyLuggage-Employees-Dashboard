import React from 'react';
import { Button } from "../components/ui/button";


function Home(){
    return(
        <div style={{fontFamily:'Kanit', position:"fixed", top:"20%", left:'41%'}}>
            <div style={{fontSize:"250%"}}>
                Welcome To
            </div>
            <div style={{fontSize:"250%"}}>
                CarryMyLuggage    
            </div>
            <div className="grid grid-cols-1" style={{paddingTop:'15%'}}>
                <div style={{paddingTop:'5%'}}>
                <Button style={{fontSize:'150%'}} variant="secondary"  className="bg-indigo-500">
                    <a style={{color:"white"}} href="/Login">Login</a>
                </Button>
                </div>
                <div style={{paddingTop:'5%'}}>
                <Button style={{fontSize:'150%'}} variant="secondary"  className="bg-indigo-500">
                    <a style={{color:"white"}} href="/Signup">Sign Up</a>
                </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;