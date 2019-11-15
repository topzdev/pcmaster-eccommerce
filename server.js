const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");

app.use(cors());
connectDB();

//Defining the routes
app.use("/api/product/", require("./routes/product"));
app.use("/api/user/", require("./routes/users"));
app.use("/api/auth/", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
