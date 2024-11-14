import express from 'express';
const app = express();

// create a new router

const router = express.Router();

// add the router to the app
app.use('/api/v1/locations', router);
// define the routes

app.get('Ottawa', (req, res) => {
    res.send('Ottawa');
});

app.get('Toronto', (req, res) => {
    res.send('Toronto');
}
);

app.get('Vancouver', (req, res) => {
    res.send('Vancouver');
}
);

export default app;
