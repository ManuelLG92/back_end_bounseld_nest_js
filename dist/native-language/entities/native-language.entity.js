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
exports.NativeLanguage = void 0;
const graphql_1 = require("@nestjs/graphql");
const language_entity_1 = require("../../language/entities/language.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let NativeLanguage = class NativeLanguage {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Native language ID by User' }),
    __metadata("design:type", Number)
], NativeLanguage.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.User, { description: 'User', nullable: true }),
    __metadata("design:type", user_entity_1.User)
], NativeLanguage.prototype, "user", void 0);
__decorate([
    graphql_1.Field(() => language_entity_1.Language, { description: 'Language', nullable: true }),
    __metadata("design:type", language_entity_1.Language)
], NativeLanguage.prototype, "language", void 0);
NativeLanguage = __decorate([
    graphql_1.ObjectType()
], NativeLanguage);
exports.NativeLanguage = NativeLanguage;
//# sourceMappingURL=native-language.entity.js.map