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
let JobContainer = class JobContainer {
};
__decorate([
    typeorm_1.Column({ name: 'C_NUMBER' }),
    __metadata("design:type", String)
], JobContainer.prototype, "containerNumber", void 0);
__decorate([
    typeorm_1.Column({ name: 'PACKS' }),
    __metadata("design:type", String)
], JobContainer.prototype, "packs", void 0);
__decorate([
    typeorm_1.Column({ name: 'KG' }),
    __metadata("design:type", String)
], JobContainer.prototype, "kg", void 0);
__decorate([
    typeorm_1.Column({ name: 'M3' }),
    __metadata("design:type", String)
], JobContainer.prototype, "m3", void 0);
__decorate([
    typeorm_1.Column({ name: 'DAMAGED_PACKS' }),
    __metadata("design:type", String)
], JobContainer.prototype, "damagedPacks", void 0);
__decorate([
    typeorm_1.Column({ name: 'PILLAGED_PACKS' }),
    __metadata("design:type", String)
], JobContainer.prototype, "pillagedPacks", void 0);
__decorate([
    typeorm_1.Column({ name: 'PKGS_OUTTURN' }),
    __metadata("design:type", String)
], JobContainer.prototype, "pkgsOutturn", void 0);
__decorate([
    typeorm_1.Column({ name: 'PKGS_RELEASE' }),
    __metadata("design:type", String)
], JobContainer.prototype, "pkgsRelease", void 0);
__decorate([
    typeorm_1.Column({ name: 'KG_OUTTURN' }),
    __metadata("design:type", String)
], JobContainer.prototype, "kgOutturn", void 0);
__decorate([
    typeorm_1.Column({ name: 'M3_OUTTURN' }),
    __metadata("design:type", String)
], JobContainer.prototype, "m3Outturn", void 0);
JobContainer = __decorate([
    typeorm_1.Entity()
], JobContainer);
exports.JobContainer = JobContainer;
