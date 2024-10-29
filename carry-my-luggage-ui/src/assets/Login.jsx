import React from 'react';
import{ useState } from 'react';
import { Button } from "../components/ui/button";
import {Link} from 'react-router-dom';


function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div style={{fontFamily:'Kanit', position:"fixed", top:"20%", left:'41%'}}>
            <div style={{fontSize:"250%"}}>
                Welcome To
            </div>
            <div style={{fontSize:"250%"}}>
                CarryMyLuggage
            </div>
            <form className="grid grid-cols-1" style={{paddingTop:'5%'}} onSubmit={handleSubmit}>
                <div style={{paddingTop:'5%'}}>
                <input style={{fontSize:'140%'}} type='text' value={username} onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                />
                </div>

                <div style={{paddingTop:'5%'}}>
                <input style={{fontSize:'140%'}} type='text' value={password} onChange={(e) => setPassword(e.target.value)} 
                    placeholder='Password'
                />
                </div>

                <div style={{paddingTop:'5%'}}>
                <Button style={{fontSize:'150%'}} variant="secondary"  className="bg-indigo-500" type='submit'>
                    <Link style={{color:"white"}} to='/Dashboard'>Login</Link>
                </Button>
                </div>
            </form>

        </div>
    );
}

export default Login;