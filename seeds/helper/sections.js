const Videos = require('../../models/videos');

module.exports.generateRandomVideos = () => {
    var v = []
    const randomVideosNo = Math.floor(Math.random() * 10);
    for (let j = 0; j < randomVideosNo; j++) {
        const randomVideo = Math.floor(Math.random() * 48) + 1;
        Videos.findOne().skip(randomVideo).exec((err, result) => {
            v.push(String(result._id));
        })
    }
    return v;
}