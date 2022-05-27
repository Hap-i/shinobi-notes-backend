const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title can\'t be empty']
    },
    description: {
        type: String,
        required: [true, 'Description can\'t be empty']
    },
    tagName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;