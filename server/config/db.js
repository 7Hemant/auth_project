const mongoose = require("mongoose");

const URL =
  "mongodb+srv://auth:authproject@authproject.ip7jn2r.mongodb.net/authproject?retryWrites=true&w=majority";

const ConnnectedDB = async () => {
  try {
    const connected = await mongoose.connect(URL);
    console.log(` conneted to mongodb${connected.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnnectedDB;
