const express = require('express');
const { handleGetUserById, handleCreateUser, handleUpdateUser } = require('../controllers/user')

const router = express.Router()

router.get("/getUser/:id", handleGetUserById)
router.post("/createUser", handleCreateUser)
router.put("/updateUser/:id", handleUpdateUser)

module.exports = router;