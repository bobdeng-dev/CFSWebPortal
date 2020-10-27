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
let FrtContainer = class FrtContainer {
};
__decorate([
    typeorm_1.Column({ name: 'C_NUMBER' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "containerNumber", void 0);
__decorate([
    typeorm_1.Column({ name: 'F_L' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "load", void 0);
__decorate([
    typeorm_1.Column({ name: 'TYPE1' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ name: 'SEAL' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "seal", void 0);
__decorate([
    typeorm_1.Column({ name: 'RECEIPT_DATE' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "arrivalDate", void 0);
__decorate([
    typeorm_1.Column({ name: 'DEPOT_AVAILABLE' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "availableFrom", void 0);
__decorate([
    typeorm_1.Column({ name: 'DEPOT_STORAGE_FROM' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "storageStart", void 0);
__decorate([
    typeorm_1.Column({ name: 'DATEOUT' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "unpackedDate", void 0);
__decorate([
    typeorm_1.Column({ name: 'WEIGHT' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "weight", void 0);
__decorate([
    typeorm_1.Column({ name: 'M3' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "m3", void 0);
__decorate([
    typeorm_1.Column({ name: 'PACKS' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "packs", void 0);
__decorate([
    typeorm_1.Column({ name: 'PKG_DESC' }),
    __metadata("design:type", String)
], FrtContainer.prototype, "packType", void 0);
FrtContainer = __decorate([
    typeorm_1.Entity()
], FrtContainer);
exports.FrtContainer = FrtContainer;
