const express = require('express');

const router = express.Router();

const { handleCreateTodo, handleGetTodoById, handleUpdateTodo } = require('../controllers/todo');

router.get("/getTodo/:id", handleGetTodoById)
router.post("/createTodo", handleCreateTodo)
router.put("/updateTodo/:id", handleUpdateTodo)

module.exports = router;
