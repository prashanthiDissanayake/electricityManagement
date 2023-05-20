const mongoose = require("mongoose");

const requestFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  nic: {
    type: String,
    required: true,
  },

  loadRequirement: {
    type: String,
    required: true,
  },

  contactNumber: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  
});

const requestelectro = mongoose.model("ElectroRequest", requestFormSchema);
module.exports = requestelectro;
