const express = require("express");
const router = express.Router();

const {
    getDeen
  } = require("../controllers/deen");
  
  router.route("/:id").get(getDeen);
  
module.exports = router;
