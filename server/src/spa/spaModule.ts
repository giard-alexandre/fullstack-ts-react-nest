import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, DbConfigService } from '../api/config';
import { ManifestManagerService } from '../api/manifest-manager/manifest-manager.service';
import { SpaController } from './spa.controller';

@Module({
    imports: [
        HttpModule,
        ConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useExisting: DbConfigService,
        }),
    ],
    controllers: [SpaController],
    providers: [ManifestManagerService],
})
export class SpaModule {
}
