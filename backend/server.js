const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const stripeRoutes = require('./payment/stripe');
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/payment', stripeRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
