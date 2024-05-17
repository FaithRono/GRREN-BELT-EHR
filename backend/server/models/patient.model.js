const mongoose = require("mongoose");


const PatientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter patient name"],
    },
    year_of_birth: {
      type: Date,
      required: true,
      default: 2000,
    },
    
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },

    contact: {
      type: Number,
      minlength: 10,
      required: true,
    },

    prescription: {
        type: String,
        required: true,
    },

    medication: {
        type: Array,
        of: {String, Number},
    },

    total_charges: {
        type: Number,
        required: false,

    },

    amount_paid: {
        type: Number,
        required: true,
    },

createdAt: {
    timestamps: true,
  },
  });

const Patient = mongoose.model("Patient", PatientSchema)

module.exports = Patient;
