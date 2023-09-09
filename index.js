const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    done: {type: Boolean},
    date: {type: Date, required: true},
    lastReferencedAt: {type: Date}
}, { timestamps: true })

const TodoModel = mongoose.model('Todo', todoSchema)

mongoose.connect('mongodb://127.0.0.1:27017/todo')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
    return res.send("Hello from Home Page")
})

app.get('/about', (req, res) => {
    return res.send("Hello from About Page")
})

app.post("/createTodo", async (req, res) => {
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
})

app.listen(8000,  () => {
    console.log("Server started")
})
