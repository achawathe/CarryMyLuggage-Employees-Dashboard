import React from 'react';
import {Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,} from "../components/ui/card";


function Dashboard(){

    const luggageCarts = [
        {cartNum:1, battery:50, status:"Moving To", location:"Gate 1", TimeRem:30},
        {cartNum:2, battery:90, status:"Idle", location:"Gate 3", TimeRem:0},
        {cartNum:3, battery:75, status:"Charging", location:"Charging", TimeRem:15},
        {cartNum:4, battery:55, status:"Moving To", location:"Gate 5", TimeRem:10}
    ];

    return(
        
        <div style={{position:"fixed", top:"8%", left:"15%"}} className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 p-4">
            {luggageCarts.map((cart) =>
                <div className='max-w-xs text-left'>
                    <Card className="bg-indigo-300 h-[120px] w-[115%]">
                        <CardTitle style={{paddingLeft:"7%", paddingTop:"3%", fontSize:"160%"}}>Cart {cart.cartNum}</CardTitle>
                        <CardContent style={{paddingTop:"3%", paddingBottom:"1%", fontSize:"110%"}}>Battery: {cart.battery}% </CardContent>
                        <CardContent style={{paddingBottom:"5%", fontSize:"110%"}}>Status: {cart.status} {cart.location} {'('}{cart.TimeRem}{' Minutes)'}</CardContent>
                    </Card>
                </div>
            )}

        </div>
    );
}

export default Dashboard;