require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./src/routes');

app.use(express.json());
// Connect to mongodb
mongoose.connect('mongodb://vmanager:tecCEM@54.173.202.133:27017/testdb?authSource=admin',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

// Routes
app.use('/api',router);
const port = process.env.PORT
app.listen(port, () => console.log(`🌎 Beautiful destinations is running on PORT:${port} 🌎`));