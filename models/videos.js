const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideosSchema = new Schema({
    title: String,
    description: String,
    source: String
});

module.exports = mongoose.model('Videos', VideosSchema);