const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/solo-learn', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

const db = mongoose.connection;

app.get("/courseUpload",function(req ,res){
    res.render("course")

})

app.get("/courseView",function(req,res){
    res.render("courseView")

})

app.get("/",function(req,res){
    res.send("<p>Its testing purpose</p>")

})

app.listen(3005, function() {
    console.log("Server started on port 3005");
  });

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
