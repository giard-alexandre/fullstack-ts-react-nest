import { Test, TestingModule } from '@nestjs/testing';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ConfigService } from '../config.service';
import { DbConfigService } from './db-config.service';

describe('DbConfigService', () => {
    let service: DbConfigService;
    let configService: ConfigService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ConfigService,
                DbConfigService],
        }).overrideProvider(ConfigService).useValue(
            {
                getString: () => 'FakeConfig',
                getNumber: () => 1234
            }
        ).compile();

        configService = module.get<ConfigService>(ConfigService);
        service = module.get<DbConfigService>(DbConfigService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    it('should return db config for postgres', () => {
        // jest.spyOn(configService, 'getString').mockImplementation(() => 'FakeConfig');
        // jest.spyOn(configService, 'getNumber').mockImplementation(() => 1234);
        const dbConfig = service.createTypeOrmOptions() as PostgresConnectionOptions;
        expect(dbConfig.type).toBe('postgres');
        expect(dbConfig.host).toBe('FakeConfig');
        expect(dbConfig.port).toBe(1234);
        expect(dbConfig.username).toBe('FakeConfig');
        expect(dbConfig.password).toBe('FakeConfig');
        expect(dbConfig.database).toBe('FakeConfig');
        expect(dbConfig.synchronize).toBeTruthy();
        expect(dbConfig.password).toBe('FakeConfig');
    });
    it('should return db config for postgres and database with "NewConfig" for strings', () => {
        jest.spyOn(configService, 'getString').mockImplementation(() => 'NewConfig');
        const dbConfig = service.createTypeOrmOptions() as PostgresConnectionOptions;
        expect(dbConfig.type).toBe('postgres');
        expect(dbConfig.host).toBe('NewConfig');
        expect(dbConfig.port).toBe(1234);
        expect(dbConfig.username).toBe('NewConfig');
        expect(dbConfig.password).toBe('NewConfig');
        expect(dbConfig.database).toBe('NewConfig');
        expect(dbConfig.synchronize).toBeTruthy();
        expect(dbConfig.password).toBe('NewConfig');
    });
});
