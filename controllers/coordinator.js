const Coordinator = require("../models/Coordinator");
const ErrorResponse = require("../utils/errorResponse");
const ApplicationForm = require("../models/ApplicationForm");
const Attendence1Form = require("../models/Attendence1Form");
const Attendence2Form = require("../models/Attendence2Form");


exports.getCoordinator = async (req, res) => {
    const cod= await Coordinator.find({"_id":req.params.id});
    if (!cod) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
    res.status(200).json(cod);

}

exports.getPendingForms = async (req,res) => {
    const applicationForms = await ApplicationForm.find({ "status" : "pending" });
    if (!applicationForms) {
        return next(new ErrorResponse("Not Found", 404));
      }
      const attendence1Form = await Attendence1Form.find({ "status" : "pending" });
    if (!attendence1Form) {
        return next(new ErrorResponse("Not Found", 404));
      }
      const attendence2Form = await Attendence2Form.find({ "status" : "pending" });
      if (!attendenc21Form) {
          return next(new ErrorResponse("Not Found", 404));
        }
    let results = [];
    results = results.push(applicationForms);
    results = results.push(attendence1Form);
    results = results.push(attendence2Form);
    res.status(200).json(results);
}