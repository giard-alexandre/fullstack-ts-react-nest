import { Test, TestingModule } from '@nestjs/testing';
import { SpaController } from './spa.controller';
import { ManifestManagerService } from '../api/manifest-manager/manifest-manager.service';

describe('SpaController', () => {
    let appController: SpaController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [SpaController],
            providers: [ManifestManagerService],
        }).compile();

        appController = app.get<SpaController>(SpaController);
    });

    describe('root', () => {
        it('should be defined', () => {
            expect(appController).toBeDefined();
        });
    });
});
