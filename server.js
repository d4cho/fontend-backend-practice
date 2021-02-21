const express = require('express');
const dotenv = require('dotenv');

// initialize express app
const app = express();

// env variables
dotenv.config({ path: './config/config.env' });

// middleware
app.use(express.json());

// routes
const test = require('./routes/test');
app.use('/api/test', test);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
