"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FisShipmentRepository_1 = require("../Repositories/FisShipmentRepository");
exports.router = express_1.Router();
let fisShipmentRepository = new FisShipmentRepository_1.FisShipmentRepository();
exports.router.get('/fisShipment', async (req, res, next) => {
    try {
        const result = await fisShipmentRepository.getFisShipment();
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    }
    catch (error) {
        return next(error);
    }
});
exports.router.get('/fisShipment/:oceanbill', async (req, res, next) => {
    try {
        const result = await fisShipmentRepository.getFisShipmentByOceanbill(req.params.oceanbill);
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    }
    catch (error) {
        return next(error);
    }
});
exports.router.get('/fisShipment/container/:containerNumber', async (req, res, next) => {
    try {
        const result = await fisShipmentRepository.getFisShipmentByContainerNumber(req.params.containerNumber);
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    }
    catch (error) {
        return next(error);
    }
});
exports.router.get('/frtContainers/:shipment', async (req, res, next) => {
    try {
        const result = await fisShipmentRepository.getFrtContainers(req.params.shipment);
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    }
    catch (error) {
        return next(error);
    }
});
exports.router.get('/fisJobs/:shipment', async (req, res, next) => {
    try {
        const result = await fisShipmentRepository.getFrtJobs(req.params.shipment);
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    }
    catch (error) {
        return next(error);
    }
});
exports.router.get('/jobContrainers/:shipment/:job', async (req, res, next) => {
    try {
        const result = await fisShipmentRepository.getJobContainers(req.params.shipment, req.params.job);
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    }
    catch (error) {
        return next(error);
    }
});
