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
exports.UpdateLearningLanguageInput = void 0;
const create_learning_language_input_1 = require("./create-learning-language.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateLearningLanguageInput = class UpdateLearningLanguageInput extends graphql_1.PartialType(create_learning_language_input_1.CreateLearningLanguageInput) {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateLearningLanguageInput.prototype, "id", void 0);
UpdateLearningLanguageInput = __decorate([
    graphql_1.InputType()
], UpdateLearningLanguageInput);
exports.UpdateLearningLanguageInput = UpdateLearningLanguageInput;
//# sourceMappingURL=update-learning-language.input.js.map