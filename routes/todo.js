const express = require('express');

const router = express.Router();

const { handleCreateTodo } = require('../controllers/todo');

router.post("/createTodo", handleCreateTodo)

module.exports = router;
