const express = require("express");
const ownersmodels = require("../models/owners-model");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("hey its working");
});
router.post("/create", async function (req, res) {
  let owners = await ownersmodels.find();
  if (owners.length > 0){
    
        return res.send(503)
        .send("you dont have permission to create a new owner");

  }
  let {fullname, email,password}=req.body
 let createdOwner= await ownersmodels.create({
    fullname,
    email,
    password,
   
  })
  res.status(201).send(createdOwner);
});

module.exports = router;
