import express from 'express';
const app = express();

// create a new route for locations

app.get('/api/v1/locations', (req, res) => {
    res.json([
        { name: 'Terminal 1', location: 'Ottawa' },
        { name: 'Terminal 2', location: 'Toronto' },
        { name: 'Terminal 3', location: 'Montreal' },
    ]);
});

export default app;
