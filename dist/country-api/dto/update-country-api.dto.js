"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCountryApiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_country_api_dto_1 = require("./create-country-api.dto");
class UpdateCountryApiDto extends mapped_types_1.PartialType(create_country_api_dto_1.CreateCountryApiDto) {
}
exports.UpdateCountryApiDto = UpdateCountryApiDto;
//# sourceMappingURL=update-country-api.dto.js.map