const express = require("express");
const router = express.Router();

const {
    postAttendence2Form ,
    getPendingAttendence2Form 
  } = require("../controllers/Attendence2Form");
  
  router.route("/:id").post(postAttendence2Form);
  router.route("/pending/:id").get(getPendingAttendence2Form);

  
module.exports = router;
