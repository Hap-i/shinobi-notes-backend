const express = require('express')

const router = express.Router();

router
    .route('/')
    .get(getAllNotes)
    .post(createNotes)

router
    .route('/:id')
    .get(getNote)
    .patch(updateNote)
    .delete(deleteNote)



module.exports = router