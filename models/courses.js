const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoursesSchema = new Schema({
    title: String,
    description: String,
    sections: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Sections'
        }
    ]
})

module.exports = mongoose.model('Courses', CoursesSchema);