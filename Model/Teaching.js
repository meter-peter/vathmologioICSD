const mongoose = require('mongoose');
const { Schema } = mongoose;



TeachingSchema = new Schema({
        lesson: {
            type: Schema.Types.ObjectId,
            ref: 'lessons'
        },
        teacher: {
            type: Schema.Types.ObjectId,
            ref: 'teachers'
        },
        statements: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'statements'
            }],
        },
        theoryMultiplier: {
            type: Number,
        },
        labMultiplier: {
            type: Number,

        },
        theoryRestriction: {
            type: Number,

        },
        labRestriction: {
            type: Number,
        },
        complete: {
            type: Boolean,
        }
    }

);

module.exports = Teaching = mongoose.model('teachings', TeachingSchema);