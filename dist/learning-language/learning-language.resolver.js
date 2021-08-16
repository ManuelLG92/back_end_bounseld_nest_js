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
exports.LearningLanguageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const learning_language_service_1 = require("./learning-language.service");
const learning_language_entity_1 = require("./entities/learning-language.entity");
const create_learning_language_input_1 = require("./dto/create-learning-language.input");
const update_learning_language_input_1 = require("./dto/update-learning-language.input");
let LearningLanguageResolver = class LearningLanguageResolver {
    constructor(learningLanguageService) {
        this.learningLanguageService = learningLanguageService;
    }
    createLearningLanguage(createLearningLanguageInput) {
        return this.learningLanguageService.create(createLearningLanguageInput);
    }
    findAll() {
        return this.learningLanguageService.findAll();
    }
    findOne(id) {
        return this.learningLanguageService.findOne(id);
    }
    updateLearningLanguage(updateLearningLanguageInput) {
        return this.learningLanguageService.update(updateLearningLanguageInput.id, updateLearningLanguageInput);
    }
    removeLearningLanguage(id) {
        return this.learningLanguageService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => learning_language_entity_1.LearningLanguage),
    __param(0, graphql_1.Args('createLearningLanguageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_learning_language_input_1.CreateLearningLanguageInput]),
    __metadata("design:returntype", void 0)
], LearningLanguageResolver.prototype, "createLearningLanguage", null);
__decorate([
    graphql_1.Query(() => [learning_language_entity_1.LearningLanguage], { name: 'learningLanguage' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LearningLanguageResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => learning_language_entity_1.LearningLanguage, { name: 'learningLanguage' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LearningLanguageResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => learning_language_entity_1.LearningLanguage),
    __param(0, graphql_1.Args('updateLearningLanguageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_learning_language_input_1.UpdateLearningLanguageInput]),
    __metadata("design:returntype", void 0)
], LearningLanguageResolver.prototype, "updateLearningLanguage", null);
__decorate([
    graphql_1.Mutation(() => learning_language_entity_1.LearningLanguage),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LearningLanguageResolver.prototype, "removeLearningLanguage", null);
LearningLanguageResolver = __decorate([
    graphql_1.Resolver(() => learning_language_entity_1.LearningLanguage),
    __metadata("design:paramtypes", [learning_language_service_1.LearningLanguageService])
], LearningLanguageResolver);
exports.LearningLanguageResolver = LearningLanguageResolver;
//# sourceMappingURL=learning-language.resolver.js.map