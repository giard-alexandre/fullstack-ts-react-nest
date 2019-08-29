import { Global, HttpModule, Module } from '@nestjs/common';
import { Agent } from 'https';
import { ConfigService } from './config/config.service';
import { DbConfigService } from './config/db-config/db-config.service';

@Global()
@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
            httpsAgent: new Agent({
                rejectUnauthorized: false
            })
        }),
    ],
    providers: [ConfigService, DbConfigService],
    exports: [ConfigService, DbConfigService]
})
export class GlobalModule {
}
