const mongoose = require('mongoose')
const Attendence2FormSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: [true, "Please provide Course Title"],
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
        required: [true, "Please provide Missing Date"],
      },

      hour: {
        type: Number,
        required: [true, "Please provide Hour"],
      },

      statement: {
        type: String,
        required: [true, "Please provide Statement of Correction"],
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
const Attendence2Form = mongoose.model("Attendence2Form", Attendence2FormSchema);

module.exports = Attendence2Form;