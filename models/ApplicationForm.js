const mongoose = require('mongoose')
const ApplicationFormSchema = new mongoose.Schema({
    applicationType: {
        type: String,
        required: [true, "Please provide Application Type"],
      },

      ddate: {
        type: Date,
        required: [true, "Please provide Date"],
      },

      name: {
        type: String,
        required: [true, "Please provide Name"],
      },

      enrollmentNumber: {
        type: Number,
        required: [true, "Please provide Enrollment Number"],
      },

      contactNumber: {
        type: Number,
        required: [true, "Please provide Contact Number"],
      },

      class: {
        type: String,
        required: [true, "Please provide class"],
      },

      request_type:{
        type: String,
        required: true,
      },

      application: {
        type: String,
        required: [true, "Please provide Application"],
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
const ApplicationForm = mongoose.model("ApplicationForm", ApplicationFormSchema);

module.exports = ApplicationForm;