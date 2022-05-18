const mongoose = require('mongoose')
const { Schema } = mongoose;


const SemesterSchema = new Schema({
    student: {
        type: Schema.types.ObjectID,
        ref: 'students'

    },
    statements: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'statements'
        }],
    },
    date: {
        type: Date.now
    }


})

module.exports = Semester = mongoose.model('semesters', SemesterSchema);