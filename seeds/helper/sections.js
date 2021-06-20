const Videos = require('../../models/video');

module.exports.generateRandomVideos = async () => {
    var v = []
    const noOfVideos = Math.floor(Math.random() * 9 + 1);
    for (let i = 0; i < noOfVideos; i++) {
        const rand = Math.floor(Math.random() * 50)
        const randomVideo = await Videos.findOne().skip(rand);
        v.push(String(randomVideo._id))
    }
    return v;
}