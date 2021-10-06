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
exports.UserRestController = void 0;
const common_1 = require("@nestjs/common");
const user_rest_service_1 = require("./user-rest.service");
const create_user_rest_dto_1 = require("./dto/create-user-rest.dto");
const update_user_rest_dto_1 = require("./dto/update-user-rest.dto");
let UserRestController = class UserRestController {
    constructor(userRestService) {
        this.userRestService = userRestService;
    }
    create(createUserRestDto) {
        return this.userRestService.create(createUserRestDto);
    }
    findAll() {
        return this.userRestService.findAll();
    }
    findOne(id) {
        return this.userRestService.findOne(id);
    }
    update(id, updateUserRestDto) {
        return this.userRestService.update(id, updateUserRestDto);
    }
    remove(id) {
        return this.userRestService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_rest_dto_1.CreateUserRestDto]),
    __metadata("design:returntype", void 0)
], UserRestController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserRestController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserRestController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_rest_dto_1.UpdateUserRestDto]),
    __metadata("design:returntype", void 0)
], UserRestController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserRestController.prototype, "remove", null);
UserRestController = __decorate([
    common_1.Controller('user-rest'),
    __metadata("design:paramtypes", [user_rest_service_1.UserRestService])
], UserRestController);
exports.UserRestController = UserRestController;
//# sourceMappingURL=user-rest.controller.js.map