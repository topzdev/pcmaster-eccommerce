const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

//Connect to DB
connectDB();

//Init Middleware
app.use(cors());
app.use(express.json({ extended: true }));

//Defining the routes
app.use('/api/product/', require('./routes/product'));
app.use('/api/user/', require('./routes/users'));
app.use('/api/auth/', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
