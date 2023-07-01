require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const app = express();
//Connect to DB
connectDB();

//Cloudinary Config
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

//Init Middleware
app.use(cors());
app.use(
	fileUpload({
		useTempFiles: true
	})
);
app.use(express.json({ extended: true }));

//Defining the routes
app.get('/', function (req, res) { return res.status(400).json({ msg: 'Welcome to PCMasterace API' }) })
app.use('/api/product/', require('./routes/product'));
app.use('/api/user/', require('./routes/users'));
app.use('/api/auth/', require('./routes/auth'));
app.use('/api/options/', require('./routes/options'));

//For production build
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
