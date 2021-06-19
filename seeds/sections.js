const mongoose = require('mongoose');
const { fName, lName } = require('./seedsHelper');
const Sections = require('../models/sections');
const { generateRandomVideos } = require('./helper/sections');

mongoose.connect('mongodb://localhost:27017/solo-learn', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedSections = async () => {
    await Sections.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random = Math.floor(Math.random() * 11);
        v = generateRandomVideos();
        console.log(v);
        const sections = new Sections({
            title: `${fName[random]} ${lName[random]}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem quasi neque sapiente, hic at facilis illum non, quae quam reprehenderit consectetur aliquid officiis quas architecto numquam dignissimos. Nostrum, delectus.',
        })
        await sections.save();
    }
}

seedSections().then(() => {
    mongoose.connection.close();
});