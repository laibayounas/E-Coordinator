const Attendence2Form = require("../models/Attendence2Form");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");


exports.postAttendence2Form = async (req, res) => {
    
    const user= await User.find({"_id":req.params.id});
    if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
      let app = new Attendence2Form({
        courseTitle: req.body.courseTitle,
        registrationId: req.body.registrationId,
        class: req.body.class,
        name: req.body.name,
        missDate: req.body.missDate,
        hour: req.body.hour,
        statement: req.body.statement,
        status: 'pending',
        user_id: req.params.id,

      })
      await app.save();
    //   user.forms.push(app);
    //   await user.save();

    res.status(200).json(app);

}

exports.getPendingAttendence2Form = async (req,res) => {
    const user = await User.find({"_id":req.params.id});
    if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
    const attendence2Form = await Attendence2Form.find({"user_id":req.params.id, "status" : "pending" });
    if (!attendence2Form) {
        return next(new ErrorResponse("Not Found", 404));
      }
    res.status(200).json(attendence2Form);
}