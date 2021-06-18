const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectionsSchema = new Schema({
    title: String,
    description: String,
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Videos'
        }
    ]
})

module.exports = mongoose.model('Sections', SectionsSchema);