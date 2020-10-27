"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
let fireBird = require('node-firebird');
let options = require('../modules/database-connection.module');
class FisShipmentRepository {
    getFisShipment() {
        return new Promise((resolve, rejects) => {
            fireBird.attach(options.opt, (err, db) => {
                if (err) {
                    throw err;
                }
                db.query("SELECT OCEAN_BILL FROM FIS_SHIPMENT WHERE ID = 1", (err, result) => {
                    if (err) {
                        console.log("Error while reading database!");
                        throw err;
                    }
                    db.detach();
                    result = this.convertDataType(result);
                    resolve(result);
                });
            });
        });
    }
    getFisShipmentByOceanbill(oceanBill) {
        return new Promise((resolve, rejects) => {
            fireBird.attach(options.opt, (err, db) => {
                if (err) {
                    throw err;
                }
                let temp = oceanBill.split(',');
                let oBill = '';
                temp.forEach((o, index) => {
                    oBill = oBill + '\'' + o + '\'' + (index != temp.length - 1 ? ',' : '');
                });
                let query = "SELECT OCEAN_BILL, SHIPMENT, BILL_DATE FROM FIS_SHIPMENT WHERE OCEAN_BILL IN (" + oBill + ") AND COMPANY = ? AND BRANCH = ?";
                db.query(query, [Constants_1.INTERPORT_COMPANY, Constants_1.INTERPORT_BRANCH], (err, result) => {
                    if (err) {
                        throw err;
                    }
                    db.detach();
                    const res = this.convertDataType(result);
                    res.forEach(r => {
                        r.shipment = r.SHIPMENT;
                        r.oceanBill = r.OCEAN_BILL;
                        r.billDate = r.BILL_DATE;
                        delete r.SHIPMENT;
                        delete r.OCEAN_BILL;
                        delete r.BILL_DATE;
                    });
                    resolve(res);
                });
            });
        });
    }
    getFrtContainers(shipment) {
        return new Promise((resolve, rejects) => {
            fireBird.attach(options.opt, (err, db) => {
                if (err) {
                    throw err;
                }
                db.query("SELECT C_NUMBER, F_L, TYPE1, SEAL, RECEIPT_DATE, DEPOT_AVAILABLE, DEPOT_STORAGE_FROM, DATEOUT, WEIGHT, M3, PACKS, PKG_DESC FROM FRT_CONTAINER WHERE SHIPMENT = ? AND COMPANY = ? AND BRANCH = ?", [shipment, Constants_1.INTERPORT_COMPANY, Constants_1.INTERPORT_BRANCH], (err, result) => {
                    if (err) {
                        throw err;
                    }
                    db.detach();
                    result = this.convertDataType(result);
                    result.forEach(res => {
                        res.containerNumber = res.C_NUMBER;
                        delete res.C_NUMBER;
                        res.load = res.F_L;
                        delete res.F_L;
                        res.type = res.TYPE1;
                        delete res.TYPE1;
                        res.seal = res.SEAL;
                        delete res.SEAL;
                        res.arrivalDate = res.RECEIPT_DATE;
                        delete res.RECEIPT_DATE;
                        res.availableFrom = res.DEPOT_AVAILABLE;
                        delete res.DEPOT_AVAILABLE;
                        res.storageStart = res.DEPOT_STORAGE_FROM;
                        delete res.DEPOT_STORAGE_FROM;
                        res.unpackedDate = res.DATEOUT;
                        delete res.DATEOUT;
                        res.weight = res.WEIGHT;
                        delete res.WEIGHT;
                        res.m3 = res.M3;
                        delete res.M3;
                        res.kg = res.KG;
                        delete res.KG;
                        res.packs = res.PACKS;
                        delete res.PACKS;
                        res.packType = res.PKG_DESC;
                        delete res.PKG_DESC;
                    });
                    resolve(result);
                });
            });
        });
    }
    getFisShipmentByContainerNumber(containerNumbers) {
        return new Promise((resolve, rejects) => {
            fireBird.attach(options.opt, (err, db) => {
                if (err) {
                    throw err;
                }
                let temp = containerNumbers.split(',');
                let cNumber = '';
                temp.forEach((o, index) => {
                    cNumber = cNumber + '\'' + o + '\'' + (index != temp.length - 1 ? ',' : '');
                });
                let query = "SELECT a.OCEAN_BILL, a.SHIPMENT, a.BILL_DATE FROM FIS_SHIPMENT a JOIN FRT_CONTAINER b ON a.COMPANY = b.COMPANY and a.BRANCH = b.BRANCH and a.SHIPMENT = b.SHIPMENT WHERE b.C_NUMBER IN (" + cNumber + ") AND b.COMPANY = ? AND b.BRANCH = ?";
                db.query(query, [Constants_1.INTERPORT_COMPANY, Constants_1.INTERPORT_BRANCH], (err, result) => {
                    if (err) {
                        throw err;
                    }
                    db.detach();
                    const res = this.convertDataType(result);
                    res.forEach(r => {
                        r.shipment = r.SHIPMENT;
                        r.oceanBill = r.OCEAN_BILL;
                        r.billDate = r.BILL_DATE;
                        delete r.SHIPMENT;
                        delete r.OCEAN_BILL;
                        delete r.BILL_DATE;
                    });
                    resolve(res);
                });
            });
        });
    }
    getFrtJobs(shipment) {
        return new Promise((resolve, rejects) => {
            fireBird.attach(options.opt, (err, db) => {
                if (err) {
                    throw err;
                }
                db.query("SELECT HOUSEBILL, SHIPMENT, JOB_UNIQUE, JOB, PORT_DEST, GOODS1, PKGS_MANIFEST, PKG_DESC, ACTUAL_KG, ACTUAL_M3, ACS_RELEASE FROM FIS_JOB WHERE SHIPMENT = ? AND COMPANY = ? AND BRANCH = ?", [shipment, Constants_1.INTERPORT_COMPANY, Constants_1.INTERPORT_BRANCH], (err, result) => {
                    if (err) {
                        throw err;
                    }
                    db.detach();
                    result = this.convertDataType(result);
                    result.forEach(res => {
                        res.shipment = res.SHIPMENT;
                        res.housebill = res.HOUSEBILL;
                        res.jobUnique = res.JOB_UNIQUE;
                        res.job = res.JOB;
                        delete res.JOB;
                        delete res.SHIPMENT;
                        delete res.HOUSEBILL;
                        delete res.JOB_UNIQUE;
                        res.portDest = res.PORT_DEST;
                        delete res.PORT_DEST;
                        res.goods = res.GOODS1;
                        delete res.GOODS1;
                        res.pkgsManifest = res.PKGS_MANIFEST;
                        delete res.PKGS_MANIFEST;
                        res.pkgDesc = res.PKG_DESC;
                        delete res.PKG_DESC;
                        res.kg = res.ACTUAL_KG;
                        delete res.ACTUAL_KG;
                        res.m3 = res.ACTUAL_M3;
                        delete res.ACTUAL_M3;
                        res.acsRelease = res.ACS_RELEASE;
                        delete res.ACS_RELEASE;
                    });
                    resolve(result);
                });
            });
        });
    }
    getJobContainers(shipment, job) {
        return new Promise((resolve, rejects) => {
            fireBird.attach(options.opt, (err, db) => {
                if (err) {
                    throw err;
                }
                db.query("SELECT C_NUMBER, PACKS, KG, M3, DAMAGED_PACKS, PILLAGED_PACKS, PKGS_OUTTURN, PKGS_RELEASE, KG_OUTTURN, M3_OUTTURN FROM FIS_JOBCONT WHERE SHIPMENT = ? AND COMPANY = ? AND BRANCH = ? AND JOB = ?", [shipment, Constants_1.INTERPORT_COMPANY, Constants_1.INTERPORT_BRANCH, job], (err, result) => {
                    if (err) {
                        throw err;
                    }
                    db.detach();
                    result = this.convertDataType(result);
                    result.forEach(res => {
                        res.containerNumber = res.C_NUMBER;
                        delete res.C_NUMBER;
                        res.packs = res.PACKS;
                        delete res.PACKS;
                        res.kg = res.KG;
                        delete res.KG;
                        res.m3 = res.M3;
                        delete res.M3;
                        res.damagedPacks = res.DAMAGED_PACKS;
                        delete res.DAMAGED_PACKS;
                        res.pillagedPacks = res.PILLAGED_PACKS;
                        delete res.PILLAGED_PACKS;
                        res.pkgsOutturn = res.PKGS_OUTTURN;
                        delete res.PKGS_OUTTURN;
                        res.pkgsRelease = res.PKGS_RELEASE;
                        delete res.PKGS_RELEASE;
                        res.kgOutturn = res.KG_OUTTURN;
                        delete res.KG_OUTTURN;
                        res.m3Outturn = res.M3_OUTTURN;
                        delete res.M3_OUTTURN;
                    });
                    resolve(result);
                });
            });
        });
    }
    convertDataType(obj) {
        obj.forEach(ob => {
            for (let [key, value] of Object.entries(ob)) {
                if (Buffer.isBuffer(value)) {
                    ob[key] = value.toString();
                }
            }
        });
        return obj;
    }
}
exports.FisShipmentRepository = FisShipmentRepository;
