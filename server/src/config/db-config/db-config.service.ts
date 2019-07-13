import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '../config.service';

@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly config: ConfigService) {
    }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.config.getString('DB_HOST'),
            port: this.config.getNumber('DB_PORT'),
            username: this.config.getString('DB_USERNAME'),
            password: this.config.getString('DB_PASSWORD'),
            database: this.config.getString('DB_DATABASE'),
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        } as TypeOrmModuleOptions;
    }
}
