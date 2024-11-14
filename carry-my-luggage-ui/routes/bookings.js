import express from 'express';
const app = express();

// create a new router

const router = express.Router();


// add the router to the app
app.use('/api/v1/bookings', router);


// define the routes

app.post('/api/v1/bookings', (req, res) => {
    res.send('Booking created');
}
);

app.get('/api/v1/bookings', (req, res) => {
    res.send('Booking retrieved');
}
);

export default app;