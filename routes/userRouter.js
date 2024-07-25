const express = require("express");
const {registerUser,loginUser}=require("../controllers/authController")
const router=express.Router()
 
router.get("/", function (req, res) {
  res.send("hey its working");
});
router.post("/register",registerUser );
router.post("/login",loginUser );

module.exports = router;
