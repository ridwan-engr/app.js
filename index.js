//import express
const express = require("express");
//cors
const cors = require("cors");
//mongoose
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const router = require("./routes/userRoutes");

const live_url ="mongodb+srv://Agbolahan_ty:Agbolahan@cluster0.vnhhwvp.mongodb.net/UserDB?appName=Cluster0";
const local_url = "mongodb://localhost:27017/AuthenticationDB";

mongoose
  .connect(live_url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));

//create express app
const app = express();
const port = 9000;
app.use(cors());
app.use(express.json());

//use routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("api is ready for use");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});