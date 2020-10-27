"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthRepository_1 = require("../Repositories/AuthRepository");
exports.router = express_1.Router();
let authRepository = new AuthRepository_1.AuthRepository();
const jwt = require('jsonwebtoken');
exports.router.post('/api/auth', async (req, res) => {
    const body = req.body;
    const user = await authRepository.getUser(body.username);
    if (!user || body.password != user.password) {
        console.log('error');
        return res.sendStatus(401);
    }
    var token = jwt.sign({ username: user.username }, 'a-secret-string-shared', { expiresIn: '2h' });
    res.send({ token });
});
