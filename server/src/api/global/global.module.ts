import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { DbConfigService } from './config/db-config/db-config.service';
import {InfluxDBService} from './influxdb/influxdb.service';

@Global()
@Module({
    providers: [ConfigService, DbConfigService, InfluxDBService],
    exports: [ConfigService, DbConfigService, InfluxDBService]
})
export class GlobalModule {
}
