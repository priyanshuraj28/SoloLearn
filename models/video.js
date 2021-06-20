const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: String,
    description: String,
    source: String
});

module.exports = mongoose.model('Video', videoSchema);