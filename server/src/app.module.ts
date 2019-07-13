import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CardModule } from './card/card.module';
import { ConfigModule, DbConfigService } from './config';
import { ManifestManagerService } from './manifest-manager/manifest-manager.service';

@Module({
    imports: [
        HttpModule,
        ConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useExisting: DbConfigService,
        }),
        CardModule
    ],
    controllers: [AppController],
    providers: [ManifestManagerService],
})
export class AppModule {
}
