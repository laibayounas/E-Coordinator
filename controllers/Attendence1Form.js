const Attendence1Form = require("../models/Attendence1Form");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");


exports.postAttendence1Form = async (req, res) => {
    
    const user= await User.find({"_id":req.params.id});
    if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
      let app = new Attendence1Form({
        subject: req.body.subject,
        registrationId: req.body.registrationId,
        class: req.body.class,
        name: req.body.name,
        missDate: req.body.missDate,
        hour: req.body.hour,
        reason: req.body.reason,
        status: 'pending',
        user_id: req.params.id,
        request_type: "Attendence1",

      })
      await app.save();
    //   user.forms.push(app);
    //   await user.save();

    res.status(200).json(app);

}

exports.getPendingAttendence1Form = async (req,res) => {
    const user = await User.find({"_id":req.params.id});
    if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
    const attendence1Form = await Attendence1Form.find({"user_id":req.params.id, "status" : "pending" });
    if (!attendence1Form) {
        return next(new ErrorResponse("Not Found", 404));
      }
    res.status(200).json(attendence1Form);
}