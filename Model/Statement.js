const mongoose = require('mongoose');
const { Schema } = mongoose;


const StatementSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'students',
        required: true
    },
    teaching: {
        type: Schema.Types.ObjectId,
        ref: 'teachings',
        required: true
    },
    theory_grade: {
        type: Number,
        required: false
    },
    lab_grade: {
        type: Number,
        required: false
    },
    final_state: {
        type: Boolean,
        required: false
    },
    created_at: {
        type: Date
    },
    marked_at: {
        type: Date
    }



});

module.exports = Statement = mongoose.model('statements', StatementSchema);