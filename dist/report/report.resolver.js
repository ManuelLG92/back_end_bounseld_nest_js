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
exports.ReportResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const report_service_1 = require("./report.service");
const report_entity_1 = require("./entities/report.entity");
const create_report_input_1 = require("./dto/create-report.input");
const update_report_input_1 = require("./dto/update-report.input");
let ReportResolver = class ReportResolver {
    constructor(reportService) {
        this.reportService = reportService;
    }
    createReport(createReportInput) {
        return this.reportService.create(createReportInput);
    }
    findAll() {
        return this.reportService.findAll();
    }
    findOne(id) {
        return this.reportService.findOne(id);
    }
    updateReport(updateReportInput) {
        return this.reportService.update(updateReportInput.id, updateReportInput);
    }
    removeReport(id) {
        return this.reportService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => report_entity_1.Report),
    __param(0, graphql_1.Args('createReportInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_report_input_1.CreateReportInput]),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "createReport", null);
__decorate([
    graphql_1.Query(() => [report_entity_1.Report], { name: 'report' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => report_entity_1.Report, { name: 'report' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => report_entity_1.Report),
    __param(0, graphql_1.Args('updateReportInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_report_input_1.UpdateReportInput]),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "updateReport", null);
__decorate([
    graphql_1.Mutation(() => report_entity_1.Report),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "removeReport", null);
ReportResolver = __decorate([
    graphql_1.Resolver(() => report_entity_1.Report),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportResolver);
exports.ReportResolver = ReportResolver;
//# sourceMappingURL=report.resolver.js.map