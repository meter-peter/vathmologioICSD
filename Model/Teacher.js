const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeacherSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    teacherRank: {
        type: Number
    },

    teachings: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'teachings'
        }]
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }

});

module.exports = Teacher = mongoose.model('teachers', TeacherSchema);