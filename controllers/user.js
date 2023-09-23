const UserModel = require('../models/user');

async function handleCreateUser(req, res) {
    const body = req?.body;
    console.log("Parjanya1", body, req)
    if (!body || !body.firstName || !body.lastName || !body.email ||!body.password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await UserModel.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        isDeleted: false,
        createdAt: new Date(Date.now())
    })
    return res.status(200).json({ message: "Success" });
}

async function handleUpdateUser(req, res) {
    const body = req?.body;
    const id = req?.params?.id;
    if (!body ||!id || !body.firstName ||!body.email ||!body.password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const result = await UserModel.findByIdAndUpdate(id, {
        firstName: body.firstName,
        email: body.email,
        password: body.password,
    });
    return res.status(200).json({ message: "Success", user: result });
}

async function handleGetUserById(req, res) {
    const { id } = req.params || {};
    const result = await UserModel.findById(id);
    return res.status(200).json(result);
}

module.exports = {
    handleCreateUser,
    handleUpdateUser,
    handleGetUserById
}