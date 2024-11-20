import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';


const env = dotenv.config();

const PORT_1 = process.env.PORT_1 // port number
const PORT_2 = process.env.PORT_2 // port number
const MONGODB_URL = process.env.MONGODB_URL // mongodb url

const app = express();
app.use(express.json());


//we already have a database. We need to connect to it

MongoClient.connect(MONGODB_URL, function(err, database) {
  if (err) throw err;
  database = database.db('carts');
  const collection = database.collection('YOW');

  collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
}
);



// Define a schema
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
  cartNum: Number,
  airport: String, // Changed to String
  battery: Number,
  status: String,
  location: String,
  timeRem: Number,
});



// Compile the model
const Booking = mongoose.model('Booking', bookingSchema);

//find all carts
app.get('/api/carts', async (req, res) => {
  try {
      const database = database.db('carts');
      const collection = database.collection('YOW')
      const result = await collection.aggregate([]).toArray();
      res.send(result);
  } catch (error) {
      console.error("Error during aggregation:", error);
      res.status(500).send({ error: "Internal Server Error" });
  }
});

// Schedule Cart
app.post('/api/ScheduleCart', async (req, res) => {
  try {
    const booking = new Booking({
      cartNum: req.body.cartNum || 3,
      airport: req.body.airport || 'YOW',
      battery: req.body.battery || 0,
      status: req.body.status || 'Available',
      location: req.body.location || 'Terminal 1',
      timeRem: req.body.timeRem || 10,
    });

    await booking.save();
    res.send('Booking created');
    console.log('Booking created');
  } catch (error) {
    res.status(500).send('Error creating booking');
  }
});

app.get('/api/ScheduleCart', async (req, res) => {
  try {
    const bookings = await Booking.find({ cartNum: req.query.cartNum });
    res.json(bookings);
    console.log('Booking retrieved');
  } catch (error) {
    res.status(500).send('Error retrieving booking');
  }
});

// Update Booking
app.put('/api/ScheduleCart', async (req, res) => {
  try {
    await Booking.updateOne(
      { cartNum: req.body.cartNum },
      { $set: { status: 'Unavailable', timeRem: 0 } }
    );
    res.send('Booking updated');
    console.log('Booking updated');
  } catch (error) {
    res.status(500).send('Error updating booking');
  }
});

// Delete Booking
app.delete('/api/ScheduleCart', async (req, res) => {
  try {
    await Booking.deleteOne({ cartNum: req.body.cartNum });
    res.send('Booking deleted');
    console.log('Booking deleted');
  } catch (error) {
    res.status(500).send('Error deleting booking');
  }
});

// Get Luggage Cart Data
app.get('/api/ScheduleCart', async (req, res) => {
  try {
    const carts = await mongoose.connection.db.collection('cart').find({}).toArray();
    res.json(carts);
    console.log('Cart data retrieved');
  } catch (error) {
    res.status(500).send('Error retrieving cart data');
  }
});

//set up the server

app.listen(PORT_2, () => {
  console.log('Server started');
}
);
