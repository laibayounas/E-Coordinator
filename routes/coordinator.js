const express = require("express");
const router = express.Router();

const {
    getCoordinator,
    getPendingForms
  } = require("../controllers/coordinator");
  
  router.route("/:id").get(getCoordinator);
  router.route("/pending").get(getPendingForms);
module.exports = router;
