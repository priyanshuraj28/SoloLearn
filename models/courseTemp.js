const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: String,
    description: String,
    sections: [
        {
            title: String,
            description: String,
            videos: [
                {
                    title: String,
                    description: String,
                    src: String
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Course', courseSchema);