import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalModule, DbConfigService } from '../api/global';
import { ManifestManagerService } from './manifest-manager/manifest-manager.service';
import { SpaController } from './spa.controller';

@Module({
    imports: [
        HttpModule,
        GlobalModule,
        TypeOrmModule.forRootAsync({
            imports: [GlobalModule],
            useExisting: DbConfigService,
        }),
    ],
    controllers: [SpaController],
    providers: [ManifestManagerService],
})
export class SpaModule {
}
