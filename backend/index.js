require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// --- Production CORS ---
const allowedOrigins = [
  process.env.FRONTEND_URL,   // Vercel production URL
  'http://localhost:5173',     // Vite dev server
  'http://localhost:3000',
].filter(Boolean);

console.log('CORS Config - Allowed Origins:', allowedOrigins);

app.use(cors({
  origin(origin, callback) {
    console.log(`CORS Request - Origin: "${origin}"`);
    // Allow requests with no origin (curl, health checks, server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    console.error(`CORS Blocked - Origin "${origin}" not in allowed list:`, allowedOrigins);
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Trust reverse proxy (Render)
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Health check (used by Render) ---
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/', bookingRoutes);
app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});