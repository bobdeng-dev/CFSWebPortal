import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { router as authRouter } from './Resources/AuthResource';
import { router as fisShipmentRouter } from './Resources/FisShipmentResource';
const bearerToken = require('express-bearer-token');
const expressJwt = require('express-jwt');

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(bearerToken())
    .use(expressJwt({ secret: 'a-secret-string-shared' }).unless({ path: ['/api/auth'] }))
    .use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(err.status).send({ message: err.message });
            console.log(err);
            return;
        }
        next();
    })
    .use(fisShipmentRouter)
    .use(authRouter);

app.listen(4201, async (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log('My Node App listening on port 4201');
});