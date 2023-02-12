const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    // expire_at: {type: Date, default: Date.now, expires: 300} ,
    fileName: {
      type: String,
      required: true,
    },
    myFile: {
      type: String,
      required: true,
    },
    webShareCount: {
      type: Number,
      default: 0,
    },
  }, 
);



const File = mongoose.model("post", postSchema);
module.exports = File;
