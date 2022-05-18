const mongoose = require('mongoose')
const { Schema } = mongoose;

const StudentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    am: {
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    year_registered: {
        type: Number,
        required: true
    },
    semesters: {
        type: [{ type: Schema.Types.ObjectId }],
        ref: 'semesters'
    }

});

module.exports = Student = mongoose.model('students', StudentSchema);