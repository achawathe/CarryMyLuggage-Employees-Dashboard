import React from 'react';
import {Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,} from "../components/ui/card";
import { Button } from "../components/ui/button";
import DropMyMenu from '../components/ui/dropMyMenu';


function Dashboard(){

    const luggageCarts = [
        {cartNum:1, battery:50, status:"Moving To", location:"Gate 1", TimeRem:30},
        {cartNum:2, battery:90, status:"Idle", location:"Gate 3", TimeRem:0},
        {cartNum:3, battery:75, status:"Charging", location:"Charging", TimeRem:15},
        {cartNum:4, battery:55, status:"Moving To", location:"Gate 5", TimeRem:10}
    ];

    return(
        <div>
            <DropMyMenu/>

            <div style={{position:"fixed", top:"2%", left:"45%", fontSize:'250%'}}>
                Airport Name
            </div>

            <div style={{position:"fixed", top:"9%", left:"17%"}} className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 p-4">
                {luggageCarts.map((cart) =>
                    <div className='max-w-xs text-left'>
                        <Card className="bg-indigo-300 h-[160px] w-[360px]">
                            <CardTitle style={{paddingLeft:"7%", paddingTop:"3%", fontSize:"160%"}}>Cart {cart.cartNum}</CardTitle>
                            <CardContent style={{paddingTop:"3%", paddingBottom:"1%", fontSize:"110%"}}>Battery: {cart.battery}% </CardContent>
                            <CardContent style={{paddingBottom:"2%", fontSize:"110%"}}>Status: {cart.status} {cart.location} {'('}{cart.TimeRem}{' Minutes)'}</CardContent>
                            <div style={{paddingLeft:'6%'}}>
                                <Button style={{fontSize:'100%', paddingLeft:''}} variant="secondary"  className="bg-indigo-500" type='submit'>
                                    <a style={{color:"white"}} href='/Cart.jsx'>Select Cart</a>
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Dashboard;