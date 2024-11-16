import React from 'react';
import {Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,} from "../components/ui/card";
import { Button } from "../components/ui/button";
import DropMyMenu from '../components/ui/dropMyMenu';


function Locations(){

    const airports = [
        {location:"Ottawa, ON, Canada", airportCode:"YOW", numberOfCarts:10},
        {location:"Toronto, ON, Canada", airportCode:"YYZ", numberOfCarts:6},
        {location:"Montreal, QC, Canada", airportCode:"YUL", numberOfCarts:4},
        {location:"Vancouver, BC, Canada", airportCode:"YVR", numberOfCarts:4},
        {location:"Edmonton, AB, Canada", airportCode:"YEG", numberOfCarts:5},
        {location:"Halifax, NS, Canada", airportCode:"YHZ", numberOfCarts:6}
    ];

    return(
        <div>
            <DropMyMenu/>

            <div style={{position:"fixed", top:"8%", left:"15%"}} className="grid gap-12 p-4 sm:grid-cols-3 md:grid-cols-4">
                {airports.map((airport) =>
                    <div className='max-w-xs text-left'>
                        <Card className="bg-indigo-300 h-[150px] w-[115%]">
                            <CardTitle style={{paddingLeft:"7%", paddingTop:"3%", fontSize:"160%"}}>{airport.location}</CardTitle>
                            <CardContent style={{paddingTop:"3%", paddingBottom:"1%", fontSize:"110%"}}>Code: {airport.airportCode} </CardContent>
                            <CardContent style={{paddingBottom:"2%", fontSize:"110%"}}>Carts: {airport.numberOfCarts} </CardContent>
                            <div style={{paddingLeft:'4%'}}>
                                <Button style={{fontSize:'100%', paddingLeft:''}} variant="secondary"  className="bg-indigo-500" type='submit'>
                                    <a style={{color:"white" }} href='/Dashboard'>Select</a>
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Locations;