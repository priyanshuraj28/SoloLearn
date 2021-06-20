const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: String,
    description: String,
    sections: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Section'
        }
    ]
})

module.exports = mongoose.model('Course', courseSchema);