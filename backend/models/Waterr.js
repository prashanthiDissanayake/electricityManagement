const mongoose = require("mongoose");

const ElectricitySchema = new mongoose.Schema({
  // ElectricityId: {
  //   type: String,
  //   required: true,
  // },
  electricityType: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  electricityNumber: {
    type: String,
    required: true,
  },
});

const electricityy = mongoose.model("Electricity", ElectricitySchema);
module.exports = electricityy;
