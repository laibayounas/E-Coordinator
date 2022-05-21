const Teacher = require("../models/Teacher");
const ErrorResponse = require("../utils/errorResponse");


exports.getTeacher = async (req, res) => {
    const tech= await Teacher.find({"_id":req.params.id});
    if (!tech) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
    res.status(200).json(tech);

}