import { Router, Request, Response, NextFunction } from "express";
import { FisShipmentRepository } from "../Repositories/FisShipmentRepository";
import { FisShipment } from "../models/FisShipment";
import { FrtContainer } from "../models/FrtContainer";
import { FisJob } from "../models/FisJob";
import { JobContainer } from "../models/JobContainer";


export const router: Router = Router();

let fisShipmentRepository = new FisShipmentRepository();

router.get('/fisShipment', async (req: Request, res: Response, next: NextFunction) => {
    try {

        const result: FisShipment[] = await fisShipmentRepository.getFisShipment();
        

        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    } catch (error) {
        return next(error);
    }
});

router.get('/fisShipment/:oceanbill', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: FisShipment[] = await fisShipmentRepository.getFisShipmentByOceanbill(req.params.oceanbill);
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    } catch (error) {
        return next(error);
    }
});

router.get('/fisShipment/container/:containerNumber', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: FisShipment[] = await fisShipmentRepository.getFisShipmentByContainerNumber(req.params.containerNumber);
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    } catch (error) {
        return next(error);
    }
});



router.get('/frtContainers/:shipment', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: FrtContainer[] = await fisShipmentRepository.getFrtContainers(req.params.shipment);
        
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    } catch (error) {
        return next(error);
    }
});

router.get('/fisJobs/:shipment', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: FisJob[] = await fisShipmentRepository.getFrtJobs(req.params.shipment);
        
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    } catch (error) {
        return next(error);
    }
});

router.get('/jobContrainers/:shipment/:job', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result: JobContainer[] = await fisShipmentRepository.getJobContainers(req.params.shipment, req.params.job);
        
        if (result.length === 0) {
            throw ('No records found!');
        }
        return res.json(result);
    } catch (error) {
        return next(error);
    }
});
