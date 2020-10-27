import { Router } from "express";
import { AuthRepository } from "../Repositories/AuthRepository";

export const router: Router = Router();

let authRepository = new AuthRepository();

const jwt = require('jsonwebtoken');

router.post('/api/auth', async (req, res) => {
    const body = req.body;
    const user = await authRepository.getUser(body.username);
    if (!user || body.password != user.password) {

        console.log('error');
        return res.sendStatus(401);
    }

    var token = jwt.sign({ username: user.username }, 'a-secret-string-shared', { expiresIn: '2h' });

    res.send({ token });

});

