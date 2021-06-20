const express = require("express");
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');

const Courses = require('./models/courseTemp');
const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://localhost:27017/solo-learn', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



app.get("/courseUpload", (req, res) => {
    res.render("course");
})

app.get("/beInstructor", (req, res) => {
    res.render("beInstructor");
})

app.get("/:id/course/view", (req, res) => {
    res.render("courseView");
})

app.get("/:id/course/description", async (req, res) => {
    const course = await Courses.findById(req.params.id);
    if (!course) {
        res.send("Cannot find the required Course");
    }
    console.log(course.sections[1]);
    res.render("courseDescription", { course });
})

app.get("/", async (req, res) => {
    const courses = await Courses.find({});
    res.render('allCoursesTemp', { courses });
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
