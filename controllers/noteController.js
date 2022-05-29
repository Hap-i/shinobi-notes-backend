const Note = require("../models/noteModel")
const { catchAsync } = require("../utils/catchAsync")

exports.getAllNotes = catchAsync(async (req, res, next) => {
    const notes = await Note.find({})
    res.status(200).json({
        status: "Success",
        data: {
            notes
        }
    })
});

exports.createNotes = catchAsync(async (req, res, next) => {

    const note = await Note.create({
        title: req.body.title,
        description: req.body.description
    })
    res.status(201).json({
        status: "Success",
        data: {
            note
        }
    })
})