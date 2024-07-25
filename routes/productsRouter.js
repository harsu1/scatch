const express=require('express')

const router= express.Router();
const ownerModel= require("../models/owners-model")

router.get("/", function (req, res){
    res.send("hey its working");
});



module.exports=router;