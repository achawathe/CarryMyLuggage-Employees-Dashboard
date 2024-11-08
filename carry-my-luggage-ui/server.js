import mongoose from 'mongoose';


const express = require('express');
const app = express();

// Create Booking

app.post('/api/v1/booking', (req, res) => {
    res.send('Booking created');
    console.log('Booking created');
}
);
// Get Booking

app.get('/api/v1/booking', (req, res) => {
    res.send('Booking retrieved');
    console.log('Booking retrieved');
}
);

// Update Booking
app.put('/api/v1/booking', (req, res) => {
    res.send('Booking updated');
    console.log('Booking updated');
}
);

// Delete Booking
app.delete('/api/v1/booking', (req, res) => {
    res.send('Booking deleted');
    console.log('Booking deleted');
}
);

//Get Luggage Cart Data

app.get('/api/v1/cart', (req, res) => {
    res.send('Cart data retrieved');
    console.log('Cart data retrieved');
} 
);
