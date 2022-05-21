const mongoose = require('mongoose')
const Attendence1FormSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Please provide Subject"],
      },

      registrationId: {
        type: Number,
        required: [true, "Please provide Registration Id"],
      },

      name: {
        type: String,
        required: [true, "Please provide Name"],
      },

      class: {
        type: String,
        required: [true, "Please provide class"],
      },

      missDate: {
        type: Date,
        required: [true, "Please provide Date"],
      },

      hour: {
        type: Number,
        required: [true, "Please provide Hour"],
      },

      reason: {
        type: String,
        required: [true, "Please provide Reason"],
      },

      request_type:{
        type: String,
        required: true,
      },

      status:{
          type: String,
          default:'pending',
          required: true,
      },
      approved_by: {
          type: String,
          required: false,
      },
      rejected_by: {
        type: String,
        required: false,
    },
    user_id : {
      type: String,
      required: true,
    }

})
const Attendence1Form = mongoose.model("Attendence1Form", Attendence1FormSchema);

module.exports = Attendence1Form;