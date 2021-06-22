const mongoose = require('mongoose');
const { fName, lName } = require('./helper/nameRandom');
const Courses = require('../models/courseTemp');
const Videos = require('../models/video');
const Sections = require('../models/section');

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

const seedCourses = async () => {
    await Videos.deleteMany({});
    await Sections.deleteMany({});
    await Courses.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const CrandomF = Math.floor(Math.random() * fName.length);
        const CrandomL = Math.floor(Math.random() * lName.length);
        const randomS = Math.floor(Math.random() * 11) + 1;
        var sections = []
        for (let j = 0; j < randomS; j++) {
            const SrandomF = Math.floor(Math.random() * fName.length);
            const SrandomL = Math.floor(Math.random() * lName.length);
            const randomV = Math.floor(Math.random() * 11) + 1;
            var videos = []
            for (let k = 0; k < randomV; k++) {
                const VrandomF = Math.floor(Math.random() * fName.length);
                const VrandomL = Math.floor(Math.random() * lName.length);
                var v = {
                    title: `${fName[VrandomF]} ${lName[VrandomL]}`,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem quasi neque sapiente, hic at facilis illum non, quae quam reprehenderit consectetur aliquid officiis quas architecto numquam dignissimos. Nostrum, delectus.',
                }
                videos.push(v);
            }
            var s = {
                title: `${fName[SrandomF]} ${lName[SrandomL]}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem quasi neque sapiente, hic at facilis illum non, quae quam reprehenderit consectetur aliquid officiis quas architecto numquam dignissimos. Nostrum, delectus.',
                videos
            }
            sections.push(s);
        }
        const course = new Courses({
            title: `${fName[CrandomF]} ${lName[CrandomL]}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem quasi neque sapiente, hic at facilis illum non, quae quam reprehenderit consectetur aliquid officiis quas architecto numquam dignissimos. Nostrum, delectus.',
            sections
        })
        await course.save();
    }
}

seedCourses().then(() => {
    mongoose.connection.close();
});