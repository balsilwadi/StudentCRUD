const express = require('express');
const router = express.Router()
const mongoose = require("mongoose");
const User = require("../models/user");

  
  router.route('/')
    .get((req,res)=>{
        const currentStudent = req.user;
    User.find()
      .lean()
      .then((students) => {
        res.render("students", {
          students: students,
          currentStudent: currentStudent,
        });
      })
      .catch((err) => console.log("err", err));
    })
    
        module.exports = router

