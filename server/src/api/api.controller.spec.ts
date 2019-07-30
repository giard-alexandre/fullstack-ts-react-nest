import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { ManifestManagerService } from './manifest-manager/manifest-manager.service';

describe('AppController', () => {
    let appController: ApiController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ApiController],
            providers: [ManifestManagerService],
        }).compile();

        appController = app.get<ApiController>(ApiController);
    });

    describe('root', () => {
        it('should be defined', () => {
            expect(appController).toBeDefined();
        });
    });
});
