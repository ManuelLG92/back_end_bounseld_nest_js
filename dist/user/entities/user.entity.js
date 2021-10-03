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
exports.User = void 0;
const learning_language_entity_1 = require("../../learning-language/entities/learning-language.entity");
const graphql_1 = require("@nestjs/graphql");
const country_entity_1 = require("../../country/entities/country.entity");
const native_language_entity_1 = require("../../native-language/entities/native-language.entity");
let User = class User {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'User Id' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ description: 'User name', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ description: 'User surname', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'User age', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    graphql_1.Field(() => country_entity_1.Country, { description: 'User country', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    graphql_1.Field(() => [native_language_entity_1.NativeLanguage], {
        description: 'User Native languages',
        nullable: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "nativeLanguages", void 0);
__decorate([
    graphql_1.Field(() => [learning_language_entity_1.LearningLanguage], {
        description: 'User learning languages',
        nullable: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "learningLanguages", void 0);
User = __decorate([
    graphql_1.ObjectType()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map