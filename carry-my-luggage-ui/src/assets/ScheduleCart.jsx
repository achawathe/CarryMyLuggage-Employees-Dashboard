import React from 'react';
import { Button } from "../components/ui/button";
import DropMyMenu from '../components/ui/dropMyMenu';
import{ useState } from 'react';

function ScheduleCart(){

    const [selectedTime, setSelectedTime] = useState('');
    const [selectedAMPM, setSelectedAMPM] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <DropMyMenu/>

            <div style={{fontFamily:'Kanit', position:"fixed", top:"20%", left:'41%'}}>

                <div style={{fontSize:"250%"}}>
                    Schedule Cart    
                </div>

                <form className="grid grid-cols-1" style={{paddingTop:'5%'}} onSubmit={handleSubmit}>
                    <div className="grid grid-4" style={{fontSize:"150%", paddingTop:'5%'}}>
                        <label htmlFor='time'>Select Time</label>
                        <select
                            id="time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                        >
                            <option value="1">1:00</option>
                            <option value="2">2:00</option>
                            <option value="3">3:00</option>
                            <option value="4">4:00</option>
                            <option value="5">5:00</option>
                            <option value="6">6:00</option>
                            <option value="7">7:00</option>
                            <option value="8">8:00</option>
                            <option value="9">9:00</option>
                            <option value="10">10:00</option>
                            <option value="11">11:00</option>
                            <option value="12">12:00</option>
                        </select>

                        <label htmlFor='AMPM' style={{paddingTop:'3%'}}>Select AM or PM</label>
                        <select
                            id="AMPM"
                            value={selectedAMPM}
                            onChange={(e) => setSelectedAMPM(e.target.value)}
                        >
                            <option value="1">PM</option>
                            <option value="2">AM</option>
                        </select>
                    </div>

                    <div style={{paddingTop:'8%'}}>
                    <Button style={{fontSize:'150%'}} variant="secondary"  className="bg-indigo-500" type='submit'>
                        <a style={{color:"white"}} href='/Dashboard.jsx'>Confirm</a>
                    </Button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default ScheduleCart;