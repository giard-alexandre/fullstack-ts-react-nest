import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SERVER_PORT } from '../config';
import { AppModule } from './app.module';
import { staticsRouter } from './statics-router';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.setViewEngine('ejs');

    app.useStaticAssets(join(__dirname, '../..', 'assets'));
    app.setBaseViewsDir(join(__dirname, '../..', 'views'));

    app.use(staticsRouter());

    await app.listen(SERVER_PORT);
}

bootstrap();
