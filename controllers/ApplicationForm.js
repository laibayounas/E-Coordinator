const ApplicationForm = require("../models/ApplicationForm");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");


exports.postApplicationForm = async (req, res) => {
    
    const user= await User.find({"_id":req.params.id});
    if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
      let app = new ApplicationForm({
        applicationType: req.body.applicationType,
        date: req.body.date,
        name: req.body.name,
        enrollmentNumber: req.body.enrollmentNumber,
        contactNumber: req.body.contactNumber,
        class: req.body.class,
        application: req.body.application,
        status: 'pending',
        request_type: "Application",
        user_id: req.params.id,

      })
      await app.save();
    //   user.forms.push(app);
    //   await user.save();

    res.status(200).json(app);

}

exports.getPendingApplicationForm = async (req,res) => {
  console.log("In")
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
    const applicationForms = await ApplicationForm.find({"user_id":req.params.id, "status" : "pending" });
    if (!applicationForms) {
        return next(new ErrorResponse("Not Found", 404));
      }
    res.status(200).json(applicationForms);
}