// Load environment variables first, before other imports
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// Define fallback environment variables in case .env fails to load
if (!process.env.PORT) process.env.PORT = 5000;
if (!process.env.MONGO_URI) process.env.MONGO_URI = 'mongodb://localhost:27017/portfolio';
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';

const express = require('express');
const cors = require('cors');

console.log('Environment variables loaded:');
console.log(`PORT: ${process.env.PORT}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`MONGO_URI: ${process.env.MONGO_URI ? 'Set' : 'Not set'}`);

// Import database connection
const connectDB = require('./config/db');

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  credentials: true, // Allow cookies
}));

// Connect to database - async operation
const startServer = async () => {
  // Try to connect to database
  const isConnected = await connectDB();
  
  if (!isConnected) {
    console.log('Server is running without MongoDB connection. Some features will be unavailable.');
  }

  // Routes
  app.use('/api/education', require('./routes/educationRoutes'));
  app.use('/api/skills', require('./routes/skillRoutes'));
  app.use('/api/projects', require('./routes/projectRoutes'));
  app.use('/api/experience', require('./routes/experienceRoutes'));

  // Root route
  app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the Portfolio API',
      endpoints: {
        education: '/api/education',
        skills: '/api/skills',
        projects: '/api/projects',
        experience: '/api/experience'
      },
      databaseStatus: isConnected ? 'Connected' : 'Not connected'
    });
  });

  // Error handling middleware
  app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error', error: err.message });
  });

  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
};

// Start the server
startServer().catch(err => {
  console.error('Failed to start server:', err);
}); 