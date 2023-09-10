const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    done: {type: Boolean},
    date: {type: Date, required: true},
    lastReferencedAt: {type: Date}
}, { timestamps: true })

const TodoModel = mongoose.model('Todo', todoSchema)

module.exports = TodoModel;