const express = require("express")
const bodyParser = require("body-parser")
const { connectDB } = require('./connection')

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
const todoRouter = require('./routes/todo')
app.use("/todo/v1", todoRouter)

// Connection
connectDB('mongodb://127.0.0.1:27017/todo')

app.listen(8000,  () => {
    console.log("Server started")
})
