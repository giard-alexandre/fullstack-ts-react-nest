import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiController } from './api.controller';
import { CardModule } from './card/card.module';
import { ConfigModule, DbConfigService } from './config';
import { ManifestManagerService } from './manifest-manager/manifest-manager.service';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        HttpModule,
        ConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useExisting: DbConfigService,
        }),
        CardModule,
        UserModule
    ],
    controllers: [ApiController],
    providers: [ManifestManagerService],
})
export class ApiModule {
}
