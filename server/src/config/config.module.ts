import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { DbConfigService } from './db-config/db-config.service';

@Global()
@Module({
    providers: [ConfigService, DbConfigService],
    exports: [ConfigService, DbConfigService]
})
export class ConfigModule {
}
