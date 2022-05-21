const VC = require("../models/VC");
const ErrorResponse = require("../utils/errorResponse");


exports.getVC = async (req, res) => {
    const vc= await VC.find({"_id":req.params.id});
    if (!vc) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
    res.status(200).json(vc);

}