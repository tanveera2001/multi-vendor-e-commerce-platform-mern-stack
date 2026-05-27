const mongoose = require("mongoose");
require("dotenv").config();

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("database connect....");
  } catch (error) {
    console.error(error.message);
  }
};
