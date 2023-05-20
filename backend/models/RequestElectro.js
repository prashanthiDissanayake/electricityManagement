const mongoose = require("mongoose");

const requestFormSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  contactNo: {
    type: String,
    required: true,
  },

  Location: {
    type: String,
    required: true,
  },
  loadRequirement: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
  },

  NIC: {
    type: String,
    required: true,
  },

  proofOfOwnership: {
    type: String,
    required: false,
  },

  WiringCertificate: {
    type: String,
    required: false,
  },
});

const requestelectro = mongoose.model("ElectroRequest", requestFormSchema);
module.exports = requestelectro;
