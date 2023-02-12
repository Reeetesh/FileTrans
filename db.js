const mongoose = require("mongoose");
require("dotenv").config();
MONGO_URL="mongodb+srv://ritesh1509:9431934953@cluster0.1lcyv9q.mongodb.net/?retryWrites=true&w=majority"
function connectDB() {
  mongoose.connect(MONGO_URL, {
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
