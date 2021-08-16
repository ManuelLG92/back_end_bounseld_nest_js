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
exports.Record = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entity/user.entity");
let Record = class Record {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Record.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column('varchar', { length: 255 }),
    __metadata("design:type", String)
], Record.prototype, "socketId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Record.prototype, "openAt", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Record.prototype, "closedAt", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Record.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.records),
    __metadata("design:type", user_entity_1.User)
], Record.prototype, "user", void 0);
Record = __decorate([
    typeorm_1.Entity()
], Record);
exports.Record = Record;
//# sourceMappingURL=records.entity.js.map