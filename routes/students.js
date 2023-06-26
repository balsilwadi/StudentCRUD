const express = require('express');
const router = express.Router()
const User = require("../models/user");

  
  router.route('/')
    .get((req,res)=>{
        res.json(students);
    })
    .post((req,res)=>{
        const { name, email, age, imageUrl } = req.body;
        const newStudent = { name, email, age, imageUrl };
        students.push(newStudent);
        res.status(201).json(newStudent);
    })

    router.route('/:id')
        .get((req,res)=>{
            res.send("user get " + req.params.id)
        })
        .put((req,res)=>{
            res.send("user update " + req.params.id)
        })
        .delete((req,res)=>{
            res.send("user delete " + req.params.id)
        })

    router.route('/:id/edit')
        .get((req,res)=>{
            res.send("get update " + req.params.id)
        })

        module.exports = router

