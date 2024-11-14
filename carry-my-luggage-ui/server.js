import mongoose from 'mongoose';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Connect to the database
mongoose.connect('mongodb://localhost:27017/booking', { useNewUrlParser: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server started');
    });
  })
  .catch((error) => {
    console.log('Error connecting to database', error);
  });



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

// Routes
app.post('/api/v1/booking', async (req, res) => {
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

app.get('/api/v1/booking', async (req, res) => {
  try {
    const bookings = await Booking.find({ cartNum: req.query.cartNum });
    res.json(bookings);
    console.log('Booking retrieved');
  } catch (error) {
    res.status(500).send('Error retrieving booking');
  }
});

// Update Booking
app.put('/api/v1/booking', async (req, res) => {
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
app.delete('/api/v1/booking', async (req, res) => {
  try {
    await Booking.deleteOne({ cartNum: req.body.cartNum });
    res.send('Booking deleted');
    console.log('Booking deleted');
  } catch (error) {
    res.status(500).send('Error deleting booking');
  }
});

// Get Luggage Cart Data
app.get('/api/v1/cart', async (req, res) => {
  try {
    const carts = await mongoose.connection.db.collection('cart').find({}).toArray();
    res.json(carts);
    console.log('Cart data retrieved');
  } catch (error) {
    res.status(500).send('Error retrieving cart data');
  }
});
