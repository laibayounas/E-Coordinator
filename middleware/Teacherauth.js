const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const Teacher = require("../models/Teacher");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const tech = await Teacher.findById(decoded.id);

    if (!tech) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.tech = tech;

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this router", 401));
  }
};
