const express = require("express");
const router = express.Router();

// Controllers
const {
  login,
  register,
  hodLogin,
  hodRegister,
  coordinatorRegister,
  coordinatorLogin,
  teacherRegister,
  teacherLogin,
  advisorRegister,
  advisorLogin,
  vcRegister,
  vcLogin,
  deenRegister,
  deenLogin,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/hod/register").post(hodRegister);
router.route("/hod/login").post(hodLogin);

router.route("/coordinator/register").post(coordinatorRegister);
router.route("/coordinator/login").post(coordinatorLogin);

router.route("/teacher/register").post(teacherRegister);
router.route("/teacher/login").post(teacherLogin);

router.route("/advisor/register").post(advisorRegister);
router.route("/advisor/login").post(advisorLogin);

router.route("/vc/register").post(vcRegister);
router.route("/vc/login").post(vcLogin);

router.route("/deen/register").post(deenRegister);
router.route("/deen/login").post(deenLogin);


router.route("/forgotpassword").post(forgotPassword);
router.route("/passwordreset/:resetToken").put(resetPassword);

module.exports = router;
