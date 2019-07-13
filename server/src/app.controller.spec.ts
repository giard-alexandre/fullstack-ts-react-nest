import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ManifestManagerService } from './manifest-manager/manifest-manager.service';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [ManifestManagerService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it('should be defined', () => {
            expect(appController).toBeDefined();
        });
    });
});
