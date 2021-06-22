const mongoose = require('mongoose');
const { fName, lName } = require('./helper/nameRandom');
const Videos = require('../models/video')

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

const seedVideos = async () => {
    await Videos.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const randomf = Math.floor(Math.random() * fName.length);
        const randoml = Math.floor(Math.random() * lName.length);
        const video = new Videos({
            title: `${fName[randomf]} ${lName[randoml]}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem quasi neque sapiente, hic at facilis illum non, quae quam reprehenderit consectetur aliquid officiis quas architecto numquam dignissimos. Nostrum, delectus.',
        })
        await video.save();
    }
}

seedVideos().then(() => {
    mongoose.connection.close();
});