const express = require("express");
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');

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

app.get("/courseUpload", (req, res) => {
    res.render("course");
})

app.get("/beInstructor", (req, res) => {
    res.render("beInstructor");
})

app.get("/:id/course/view", (req, res) => {
    res.render("courseView");
})

app.get("/:id/course/desciption", (req, res) => {
    res.render("courseDescription");
})

app.get("/", (req, res) => {
    res.send("<h1>Its testing purpose</h1>")
})

app.listen(3000, () => {
    console.log("Server started on port 3005");
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
