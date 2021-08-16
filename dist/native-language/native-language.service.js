"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeLanguageService = void 0;
const common_1 = require("@nestjs/common");
let NativeLanguageService = class NativeLanguageService {
    create(createNativeLanguageInput) {
        return 'This action adds a new nativeLanguage';
    }
    findAll() {
        return `This action returns all nativeLanguage`;
    }
    findOne(id) {
        return `This action returns a #${id} nativeLanguage`;
    }
    update(id, updateNativeLanguageInput) {
        return `This action updates a #${id} nativeLanguage`;
    }
    remove(id) {
        return `This action removes a #${id} nativeLanguage`;
    }
};
NativeLanguageService = __decorate([
    common_1.Injectable()
], NativeLanguageService);
exports.NativeLanguageService = NativeLanguageService;
//# sourceMappingURL=native-language.service.js.map