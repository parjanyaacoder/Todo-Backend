const TodoModel = require("../models/todo")

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

module.exports = {
  handleCreateTodo
}