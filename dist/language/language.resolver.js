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
exports.LanguageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const language_service_1 = require("./language.service");
const language_entity_1 = require("./entities/language.entity");
const create_language_input_1 = require("./dto/create-language.input");
const update_language_input_1 = require("./dto/update-language.input");
let LanguageResolver = class LanguageResolver {
    constructor(languageService) {
        this.languageService = languageService;
    }
    createLanguage(createLanguageInput) {
        return this.languageService.create(createLanguageInput);
    }
    findAll() {
        return this.languageService.findAll();
    }
    findOne(id) {
        return this.languageService.findOne(id);
    }
    updateLanguage(updateLanguageInput) {
        return this.languageService.update(updateLanguageInput.id, updateLanguageInput);
    }
    removeLanguage(id) {
        return this.languageService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => language_entity_1.Language),
    __param(0, graphql_1.Args('createLanguageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_language_input_1.CreateLanguageInput]),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "createLanguage", null);
__decorate([
    graphql_1.Query(() => [language_entity_1.Language], { name: 'language' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => language_entity_1.Language, { name: 'language' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => language_entity_1.Language),
    __param(0, graphql_1.Args('updateLanguageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_language_input_1.UpdateLanguageInput]),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "updateLanguage", null);
__decorate([
    graphql_1.Mutation(() => language_entity_1.Language),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "removeLanguage", null);
LanguageResolver = __decorate([
    graphql_1.Resolver(() => language_entity_1.Language),
    __metadata("design:paramtypes", [language_service_1.LanguageService])
], LanguageResolver);
exports.LanguageResolver = LanguageResolver;
//# sourceMappingURL=language.resolver.js.map