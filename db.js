const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  });
  const connection = mongoose.connection;

  connection
    .once('open', () => {
      console.log("Mongo DB connected");
    })
    .on('error',(err) => {
      console.log("connection failed");
    });
}

module.exports = connectDB;
