const express = require("express");
const router = express.Router();

const {
    postApplicationForm ,
    getPendingApplicationForm,
  } = require("../controllers/ApplicationForm");
  
  router.route("/:id").post(postApplicationForm);
  router.route("/pending/:id").get(getPendingApplicationForm);
 

  
module.exports = router;
