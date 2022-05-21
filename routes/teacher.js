const express = require("express");
const router = express.Router();

const {
    getTeacher
  } = require("../controllers/teacher");
  
  router.route("/:id").get(getTeacher);
  
module.exports = router;
