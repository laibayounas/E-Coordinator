const Deen = require("../models/Deen");
const ErrorResponse = require("../utils/errorResponse");


exports.getDeen = async (req, res) => {
    const deen= await Deen.find({"_id":req.params.id});
    if (!deen) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
    res.status(200).json(deen);

}