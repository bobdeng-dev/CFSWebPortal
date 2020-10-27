"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const AuthResource_1 = require("./Resources/AuthResource");
const FisShipmentResource_1 = require("./Resources/FisShipmentResource");
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
    .use(FisShipmentResource_1.router)
    .use(AuthResource_1.router);
app.listen(4201, async (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log('My Node App listening on port 4201');
});
