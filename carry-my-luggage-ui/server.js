import mongoose from 'mongoose';


// Connect to the database
mongoose.connect('mongodb://localhost:27017/booking', { useNewUrlParser: true }.then (() => {
    const app = express();
    app.use(express.json());
    app.use(express.static('public'));

    app.listen(3000, () => {
        console.log('Server started');
    }
    );
}).catch((error) => {
    console.log('Error connecting to database');
}
));


//define our database db
const db = mongoose.connection;

// Once connected to database, log a success message
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

// Define a schema
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
    cartNum: Number,
    airport: Date,
    battery: Number,
    status: String,
    location: String,
    timeRem: Number,
});

// Compile the model
const Booking = mongoose.model('Booking', bookingSchema);

// Create a new booking

app.post('/api/v1/booking', (req, res) => {
    const booking = new Booking({
        cartNum: 3,
        airport: 'YOW',
        battery: 0,  // this will be fetched from the cart
        status: 'Available', // this will be updated by the cart
        location: 'Terminal 1', // this will fetched from the cart
        timeRem: 10,
    });

    db.collection('booking').insertOne(booking);

    res.send('Booking created');
    console.log('Booking created');
}
);

// Get Booking
app.get('/api/v1/booking', (req, res) => {
    db.collection('booking').find({cartNum: req.cartNum}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    res.send('Booking retrieved');
    console.log('Booking retrieved');
}
);


// Update Booking

app.put('/api/v1/booking', (req, res) => {

    db.collection('booking').updateOne({cartNum: req.cartNum}, {
        $set: {
            status: 'Unavailable',
            timeRem: 0,
        }
    });

    res.send('Booking updated');
    console.log('Booking updated');
}
);

// Delete Booking

app.delete('/api/v1/booking', (req, res) => {
    db.collection('booking').deleteOne({cartNum: req.cartNum});

    res.send('Booking deleted');
    console.log('Booking deleted');
});

//Get Luggage Cart Data
app.get('/api/v1/cart', (req, res) => {
    db.collection('cart').find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    res.send('Cart data retrieved');
    console.log('Cart data retrieved');
} 
);
