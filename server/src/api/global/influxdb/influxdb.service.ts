import {Injectable} from '@nestjs/common';
import {ConfigService} from '..';
import {InfluxDB} from 'influx';

@Injectable()
export class InfluxDBService extends InfluxDB {

    constructor(private readonly config: ConfigService) {
        super({
            host: config.getString('INFLUXDB_HOST'),
            database: config.getString(''),
            password: config.getString(''),
        });
    }
}
