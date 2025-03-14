const express = require ('express');
const dotenv = require ('dotenv');
const connectDB = require ('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const jwt=require('jsonwebtoken');

dotenv.config();  // Load environment variables
const app = express();
const PORT = process.env.PORT || 9000;
const JWT_SECRET= process.env.JWT_SECRET || 'randomString123';

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Database Connection
connectDB();

// Routes
app.use('/api/users', userRoutes);
console.log("JWT_SECRET:", process.env.JWT_SECRET);

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

app.get("/",(req,res)=> {
    res.send({status:"started"});
})