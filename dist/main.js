"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: 'hero',
                brokers: ['localhost:9094'],
            },
            consumer: {
                groupId: 'my-consumer-' + Math.random(),
            },
        },
    });
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await app.startAllMicroservices();
    await app.listen(3500);
}
bootstrap();
//# sourceMappingURL=main.js.map