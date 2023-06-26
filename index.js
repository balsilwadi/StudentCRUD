const express = require("express");
const { engine } = require("express-handlebars");


const connectToDB = require("./config/db");

//app INIT
const app = express();

//DB Connection
connectToDB();

//Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// app.get("/", (req, res) => {
//   const currentStudent = req.user;
//     Review.find()
//       .lean()
//       .then((students) => {
//         res.render("students-index", {
//           students: students,
//           currentStudent: currentStudent,
//         });
//       })
//       .catch((err) => console.log("err", err));
// });

//routes
const userRouter = require('./routes/students')
const homeRouter = require('./routes/home') 
app.use('/api/students', userRouter)
app.use('/',homeRouter)

// Listen
app.listen(5000, () => console.log("Server running on port 5000"));

module.exports = app;
