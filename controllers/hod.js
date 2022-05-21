const HOD = require("../models/HOD");
const ErrorResponse = require("../utils/errorResponse");


exports.getHOD = async (req, res) => {
    const hod= await HOD.find({"_id":req.params.id});
    if (!hod) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
    res.status(200).json(hod);

}