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
const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
// Allow both with and without trailing slash to prevent CORS "slashed" origin mismatch errors
const allowedOrigins = [
  clientUrl,
  clientUrl.replace(/\/$/, ""), // Remove slash if present
  clientUrl.replace(/\/$/, "") + "/" // Add slash if missing
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
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
