const express = require("express");
const router = express.Router();

const {
    getVC
  } = require("../controllers/vc");
  
  router.route("/:id").get(getVC);
  
module.exports = router;
