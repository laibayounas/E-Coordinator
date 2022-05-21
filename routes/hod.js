const express = require("express");
const router = express.Router();

const {
    getHOD
  } = require("../controllers/hod");
  
  router.route("/:id").get(getHOD);
  
module.exports = router;
