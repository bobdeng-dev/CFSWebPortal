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
let FisJob = class FisJob {
};
__decorate([
    typeorm_1.Column({ name: 'JOB_UNIQUE' }),
    __metadata("design:type", String)
], FisJob.prototype, "jobUnique", void 0);
__decorate([
    typeorm_1.Column({ name: 'JOB' }),
    __metadata("design:type", String)
], FisJob.prototype, "job", void 0);
__decorate([
    typeorm_1.Column({ name: 'SHIPMENT' }),
    __metadata("design:type", String)
], FisJob.prototype, "shipment", void 0);
__decorate([
    typeorm_1.Column({ name: 'HOUSEBILL' }),
    __metadata("design:type", String)
], FisJob.prototype, "housebill", void 0);
__decorate([
    typeorm_1.Column({ name: 'PORT_DEST' }),
    __metadata("design:type", String)
], FisJob.prototype, "portDest", void 0);
__decorate([
    typeorm_1.Column({ name: 'GOODS1' }),
    __metadata("design:type", String)
], FisJob.prototype, "goods", void 0);
__decorate([
    typeorm_1.Column({ name: 'PKGS_MANIFEST' }),
    __metadata("design:type", String)
], FisJob.prototype, "pkgsManifest", void 0);
__decorate([
    typeorm_1.Column({ name: 'PKG_DESC' }),
    __metadata("design:type", String)
], FisJob.prototype, "pkgDesc", void 0);
__decorate([
    typeorm_1.Column({ name: 'ACTUAL_KG' }),
    __metadata("design:type", String)
], FisJob.prototype, "kg", void 0);
__decorate([
    typeorm_1.Column({ name: 'ACTUAL_M3' }),
    __metadata("design:type", String)
], FisJob.prototype, "m3", void 0);
__decorate([
    typeorm_1.Column({ name: 'ACS_RELEASE' }),
    __metadata("design:type", String)
], FisJob.prototype, "acsRelease", void 0);
FisJob = __decorate([
    typeorm_1.Entity()
], FisJob);
exports.FisJob = FisJob;
