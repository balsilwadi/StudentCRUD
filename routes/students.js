const express = require('express');
const router = express.Router()
const students = [
    {
      name: "Yasser",
      email: "y@gmail.com",
      age: 26,
      imageUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
router.get("/", (req, res) => {
    res.json(students);
    //   res.render("students", { students });
  });
  // Create a student
  app.post("/api/students", (req, res) => {
      const { name, email, age, imageUrl } = req.body;
      const newStudent = { name, email, age, imageUrl };
      students.push(newStudent);
      res.status(201).json(newStudent);
    });
    // Edit a student
    app.put("/api/students/:id", (req, res) => {
      const studentId = req.params.id;
      const { name, email, age, imageUrl } = req.body;
      const student = students.find((student) => student.id === studentId);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      student.name = name;
      student.email = email;
      student.age = age;
      student.imageUrl = imageUrl;
      res.json(student);
    });
    // Get a specific student
  app.get("/api/students/:id", (req, res) => {
      const studentId = req.params.id;
      const student = students.find((student) => student.id === studentId);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.json(student);
    });
    // Delete a student
    app.delete("/api/students/:id", (req, res) => {
      const studentId = req.params.id;
      const studentIndex = students.findIndex((student) => student.id === studentId);
      if (studentIndex === -1) {
        return res.status(404).json({ message: "Student not found" });
      }
      const deletedStudent = students.splice(studentIndex, 1)[0];
      res.json(deletedStudent);
    });