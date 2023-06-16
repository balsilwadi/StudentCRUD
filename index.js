const express = require("express");
const app = express();
// routes
// mostly work with JSON at the beginning

// Render home page
app.get("/", (req, res) => {
  res.send("Home page");
});


const userRouter = require('./routes/student.js')
app.use('/api/students', userRouter)

app.listen(5000, () => console.log("Server running on port 5000"));