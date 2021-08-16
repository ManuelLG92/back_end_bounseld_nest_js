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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsController = void 0;
const common_1 = require("@nestjs/common");
const records_service_1 = require("./records.service");
let RecordsController = class RecordsController {
    constructor(recordsService) {
        this.recordsService = recordsService;
    }
    async getAll(res) {
        const AllConnections = await this.recordsService.getAllConnections();
        return res.status(common_1.HttpStatus.OK).json(AllConnections);
    }
    async findRecordsByUserId(id, res) {
        const userConnections = await this.recordsService.getConnectionsByUserId(id);
        return res.status(common_1.HttpStatus.OK).json(userConnections);
    }
    async findRecordsByUserIdAndDate(id, from, to, res) {
        const userConnectionsByDate = await this.recordsService.getConnectionsByUserIdAndDate(id, from, to);
        return res.status(common_1.HttpStatus.OK).json(userConnectionsByDate);
    }
};
__decorate([
    common_1.Get('/all'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecordsController.prototype, "getAll", null);
__decorate([
    common_1.Get('/user/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RecordsController.prototype, "findRecordsByUserId", null);
__decorate([
    common_1.Get('/user/:id/from/:from/to/:to'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Param('from')),
    __param(2, common_1.Param('to')),
    __param(3, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Object]),
    __metadata("design:returntype", Promise)
], RecordsController.prototype, "findRecordsByUserIdAndDate", null);
RecordsController = __decorate([
    common_1.Controller('records'),
    __metadata("design:paramtypes", [records_service_1.RecordsService])
], RecordsController);
exports.RecordsController = RecordsController;
//# sourceMappingURL=recordsController.js.map