//mongodb+srv://balsilwadi:admin101@cluster0.zurimef.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");

const DB_URL = `mongodb+srv://balsilwadi:Admin101@cluster0.zurimef.mongodb.net/?retryWrites=true&w=majority`;

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database successfully connected!");
  } catch (err) {
    console.log("DATABASE ERROR", err);
  }
};

module.exports = connectToDB;
