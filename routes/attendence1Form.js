const express = require("express");
const router = express.Router();

const {
    postAttendence1Form ,
    getPendingAttendence1Form 
  } = require("../controllers/Attendence1Form");
  
  router.route("/:id").post(postAttendence1Form);
  router.route("/pending/:id").get(getPendingAttendence1Form);

  
module.exports = router;
