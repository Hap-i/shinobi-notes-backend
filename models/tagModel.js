const { Schema, default: mongoose } = require("mongoose")

const tagSchema = new Schema({
    tagName: {
        type: String,
        required: true
    }
})

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;