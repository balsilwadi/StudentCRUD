const mongoose = require("mongoose");
const { Schema } = mongoose;

  const Students = mongoose.model("Comment", {
    name: String,
    email: String,
    age: Number,
    imageUrl:String
  });

  module.exports = Students;
