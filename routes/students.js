const express = require('express');
const router = express.Router()
const students = [
    {
      name: "Bilal",
      email: "balsilwadi@gmail.com",
      age: 21,
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQGoWdpmVGT_wQ/profile-displayphoto-shrink_800_800/0/1651848055402?e=2147483647&v=beta&t=CEOgG11R6AlGOo660o6kawqBxY8r0Y9BS7DrSYWHjyI",
    },
  ];

  
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

