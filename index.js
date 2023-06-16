const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});

const userRouter = require('./routes/students.js')
app.use('/api/students', userRouter)

app.listen(5000, () => console.log("Server running on port 5000"));