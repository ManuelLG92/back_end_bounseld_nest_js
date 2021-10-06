"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Countries_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Countries = void 0;
const common_1 = require("@nestjs/common");
let Countries = Countries_1 = class Countries {
    constructor() {
        this.countries = ['Spain'];
    }
    findCountry(name) {
        return Countries_1[name];
    }
};
Countries = Countries_1 = __decorate([
    common_1.Injectable()
], Countries);
exports.Countries = Countries;
//# sourceMappingURL=countries.js.map