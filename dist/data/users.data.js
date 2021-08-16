"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../users/entity/user.entity");
let users = new Array();
for (let i = 0; i < 10; i++) {
    const user = new user_entity_1.User();
    user.id = i;
    user.name = "User";
}
//# sourceMappingURL=users.data.js.map