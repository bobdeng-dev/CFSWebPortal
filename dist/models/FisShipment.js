"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let FisShipment = class FisShipment {
};
__decorate([
    typeorm_1.Column({ name: 'OCEAN_BILL' }),
    __metadata("design:type", String)
], FisShipment.prototype, "oceanBill", void 0);
__decorate([
    typeorm_1.Column({ name: 'SHIPMENT' }),
    __metadata("design:type", String)
], FisShipment.prototype, "shipment", void 0);
__decorate([
    typeorm_1.Column({ name: 'BILL_DATE' }),
    __metadata("design:type", String)
], FisShipment.prototype, "billDate", void 0);
FisShipment = __decorate([
    typeorm_1.Entity('FIS_SHIPMENT')
], FisShipment);
exports.FisShipment = FisShipment;
