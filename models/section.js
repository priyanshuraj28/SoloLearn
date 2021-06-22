const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    title: String,
    description: String,
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ]
})

module.exports = mongoose.model('Section', sectionSchema);