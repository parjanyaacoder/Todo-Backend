const express = require("express")
const bodyParser = require("body-parser")
const { connectDB } = require('./connection')
const todoRouter = require('./routes/todo') 
const userRouter = require('./routes/user')

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
app.use("/todo/v1", todoRouter)
app.use("/user/v1", userRouter)

// Connection
connectDB('mongodb://127.0.0.1:27017/todo')

app.listen(8000,  () => {
    console.log("Server started")
})
