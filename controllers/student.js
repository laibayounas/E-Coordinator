const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");


exports.getUser = async (req, res) => {
    const user= await User.find({"_id":req.params.id});
    if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401));
      }
    res.status(200).json(user);

}