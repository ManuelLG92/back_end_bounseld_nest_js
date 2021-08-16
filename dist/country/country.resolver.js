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
exports.CountryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const country_service_1 = require("./country.service");
const country_entity_1 = require("./entities/country.entity");
const create_country_input_1 = require("./dto/create-country.input");
const update_country_input_1 = require("./dto/update-country.input");
let CountryResolver = class CountryResolver {
    constructor(countryService) {
        this.countryService = countryService;
    }
    createCountry(createCountryInput) {
        return this.countryService.create(createCountryInput);
    }
    findAll() {
        return this.countryService.findAll();
    }
    findOne(id) {
        return this.countryService.findOne(id);
    }
    updateCountry(updateCountryInput) {
        return this.countryService.update(updateCountryInput.id, updateCountryInput);
    }
    removeCountry(id) {
        return this.countryService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => country_entity_1.Country),
    __param(0, graphql_1.Args('createCountryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_country_input_1.CreateCountryInput]),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "createCountry", null);
__decorate([
    graphql_1.Query(() => [country_entity_1.Country], { name: 'country' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => country_entity_1.Country, { name: 'country' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => country_entity_1.Country),
    __param(0, graphql_1.Args('updateCountryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_country_input_1.UpdateCountryInput]),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "updateCountry", null);
__decorate([
    graphql_1.Mutation(() => country_entity_1.Country),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "removeCountry", null);
CountryResolver = __decorate([
    graphql_1.Resolver(() => country_entity_1.Country),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryResolver);
exports.CountryResolver = CountryResolver;
//# sourceMappingURL=country.resolver.js.map