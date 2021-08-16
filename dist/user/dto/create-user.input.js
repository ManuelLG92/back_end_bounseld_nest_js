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
exports.CreateUserInput = void 0;
const client_1 = require(".prisma/client");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateUserInput = class CreateUserInput {
};
__decorate([
    graphql_1.Field({ description: 'Name between 2 and 100 characters' }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(2, 100),
    __metadata("design:type", String)
], CreateUserInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ description: 'Surname between 2 and 100 characters' }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(2, 100),
    __metadata("design:type", String)
], CreateUserInput.prototype, "surname", void 0);
__decorate([
    graphql_1.Field({ description: 'This website is just for people over 18 years old.' }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Min(18),
    __metadata("design:type", Number)
], CreateUserInput.prototype, "age", void 0);
__decorate([
    graphql_1.Field({ description: 'Choose gender "MALE | FEMALE | PREFER_NOT:SAY' }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(4),
    __metadata("design:type", String)
], CreateUserInput.prototype, "gender", void 0);
__decorate([
    graphql_1.Field({ description: 'Provide valid country ID.' }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Min(1),
    __metadata("design:type", Number)
], CreateUserInput.prototype, "countryId", void 0);
__decorate([
    graphql_1.Field({ description: 'Provide valid Email.' }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ description: 'Password between 8 and 32 characters' }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(8, 32),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    graphql_1.Field({ nullable: true, description: 'Optional description max 255 characters.' }),
    class_validator_1.IsOptional(),
    class_validator_1.MaxLength(255),
    __metadata("design:type", String)
], CreateUserInput.prototype, "description", void 0);
CreateUserInput = __decorate([
    graphql_1.InputType()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
//# sourceMappingURL=create-user.input.js.map