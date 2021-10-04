// require mongoose
const mongoose = require("mongoose");

//connect Db

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    console.log("database is connected successfully");
  } catch (error) {
    console.error("cannot connect to Db");
  }
};

module.exports = connectdb;
