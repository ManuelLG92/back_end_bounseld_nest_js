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
exports.NativeLanguageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const native_language_service_1 = require("./native-language.service");
const native_language_entity_1 = require("./entities/native-language.entity");
const create_native_language_input_1 = require("./dto/create-native-language.input");
const update_native_language_input_1 = require("./dto/update-native-language.input");
let NativeLanguageResolver = class NativeLanguageResolver {
    constructor(nativeLanguageService) {
        this.nativeLanguageService = nativeLanguageService;
    }
    createNativeLanguage(createNativeLanguageInput) {
        return this.nativeLanguageService.create(createNativeLanguageInput);
    }
    findAll() {
        return this.nativeLanguageService.findAll();
    }
    findOne(id) {
        return this.nativeLanguageService.findOne(id);
    }
    updateNativeLanguage(updateNativeLanguageInput) {
        return this.nativeLanguageService.update(updateNativeLanguageInput.id, updateNativeLanguageInput);
    }
    removeNativeLanguage(id) {
        return this.nativeLanguageService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => native_language_entity_1.NativeLanguage),
    __param(0, graphql_1.Args('createNativeLanguageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_native_language_input_1.CreateNativeLanguageInput]),
    __metadata("design:returntype", void 0)
], NativeLanguageResolver.prototype, "createNativeLanguage", null);
__decorate([
    graphql_1.Query(() => [native_language_entity_1.NativeLanguage], { name: 'nativeLanguage' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NativeLanguageResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => native_language_entity_1.NativeLanguage, { name: 'nativeLanguage' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NativeLanguageResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => native_language_entity_1.NativeLanguage),
    __param(0, graphql_1.Args('updateNativeLanguageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_native_language_input_1.UpdateNativeLanguageInput]),
    __metadata("design:returntype", void 0)
], NativeLanguageResolver.prototype, "updateNativeLanguage", null);
__decorate([
    graphql_1.Mutation(() => native_language_entity_1.NativeLanguage),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NativeLanguageResolver.prototype, "removeNativeLanguage", null);
NativeLanguageResolver = __decorate([
    graphql_1.Resolver(() => native_language_entity_1.NativeLanguage),
    __metadata("design:paramtypes", [native_language_service_1.NativeLanguageService])
], NativeLanguageResolver);
exports.NativeLanguageResolver = NativeLanguageResolver;
//# sourceMappingURL=native-language.resolver.js.map