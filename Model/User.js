const mongoose = require('mongoose')
const { Schema } = mongoose;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Pending', 'User', 'Admin', 'Teacher', 'Student'],
        required: true,
        default: 'Pending'
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'students',
        required: false

    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'teachers',
        required: false
    }



});

module.exports = User = mongoose.model('users', UserSchema);