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
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const records_entity_1 = require("./entity/records.entity");
let RecordsService = class RecordsService {
    constructor(recordRepository) {
        this.recordRepository = recordRepository;
        this.logger = new common_1.Logger();
    }
    async addNewConnection(socketId, userId) {
        const record = new records_entity_1.Record();
        record.socketId = socketId;
        record.userId = userId;
        record.openAt = new Date();
        await this.recordRepository.save(record);
    }
    async closeConnection(socketId) {
        const currentConnection = await this.recordRepository.findOne({
            where: {
                socketId: socketId,
            },
        });
        if (!currentConnection)
            throw new common_1.NotFoundException('Connection not found');
        currentConnection.closedAt = new Date();
        await this.recordRepository.save(currentConnection);
    }
    async getConnectionsByUserId(userId) {
        return await this.recordRepository.find({
            where: {
                userId: userId,
            },
        });
    }
    async getAllConnections() {
        return await this.recordRepository.find();
    }
    async getConnectionsByUserIdAndDate(userId, from, to) {
        this.logger.log(`string from: ${from} - string to: ${to}`);
        const fromDate = new Date(from);
        const toDate = new Date(to);
        this.logger.log(`Date from: ${fromDate} - Date to: ${toDate}`);
        const dateToFormatted = this.getDateTimeFormatted(toDate);
        const dateFromFormatted = this.getDateTimeFormatted(fromDate);
        console.log(dateToFormatted, dateFromFormatted);
        this.logger.log(`Date from formatted: ${dateFromFormatted} - Date formatted to: ${dateToFormatted}`);
        return await this.recordRepository.find({
            where: {
                userId: userId,
                openAt: typeorm_2.MoreThanOrEqual(dateFromFormatted),
                closedAt: typeorm_2.LessThanOrEqual(dateToFormatted),
            },
        });
    }
    getDateTimeFormatted(date) {
        const dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDay(), date.getHours(), date.getMinutes(), date.getMilliseconds());
        console.log(dateTime);
        return dateTime;
    }
};
RecordsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(records_entity_1.Record)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecordsService);
exports.RecordsService = RecordsService;
//# sourceMappingURL=records.service.js.map