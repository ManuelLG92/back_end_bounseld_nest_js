"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserRestDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_rest_dto_1 = require("./create-user-rest.dto");
class UpdateUserRestDto extends mapped_types_1.PartialType(create_user_rest_dto_1.CreateUserRestDto) {
}
exports.UpdateUserRestDto = UpdateUserRestDto;
//# sourceMappingURL=update-user-rest.dto.js.map