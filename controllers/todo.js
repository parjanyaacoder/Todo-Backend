const TodoModel = require("../models/todo")

async function handleGetTodoById(req, res) {
    console.log('req.params:', req.params);
    const { id } = req.params || {};
    console.log('id:', id);
    const result = await TodoModel.findById(id);
    console.log('result:', result);
    return res.status(200).json(result);
}

async function handleCreateTodo(req, res) {
    const body = req?.body
    console.log("Parjanya",body, req, !body, !body?.title,!body?.description,!body?.date)
    if (!body || !body.title ||!body.description || !body.date) {
        return res.status(400).json({error: "Missing required fields"})
    }
    const result = await TodoModel.create({
        title: body.title,
        description: body.description,
        done: false,
        date: body.date,
        lastReferencedAt: Date.now()
    })
    console.log("Parjanya", result)
    return res.status(200).json({message: "Success"})
}

async function handleUpdateTodo(req, res) {
    const { id } = req.params || {};
    const body = req?.body
    if (!body || !body.title ||!body.description || !body.date) {
        return res.status(400).json({error: "Missing required fields"})
    }
    const result = await TodoModel.findByIdAndUpdate(id, {
        title: body.title,
        description: body.description,
        done: body.done,
        lastReferencedAt: Date.now()
    })
    return res.status(200).json({message: "Success", todo: result})
}

module.exports = {
  handleCreateTodo,
  handleGetTodoById,
  handleUpdateTodo
}
