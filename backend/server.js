const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

// app.use('/uploads', express.static('./uploads'));

const PORT = process.env.PORT || 8075;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection success!");
});

//const electricityRouter = require("./routes/Electricityy.js");

const waterRouter = require("./routes/Waterr.js");
app.use("/waterr", waterRouter);

const waterRequestRouter = require("./routes/RequestWatero.js");
app.use("/waterrequest", waterRequestRouter);

//app.use("/hardware",hardwareRouter);

app.listen(PORT, () => {
  console.log("Server is up and running on port number:" + PORT);
});
