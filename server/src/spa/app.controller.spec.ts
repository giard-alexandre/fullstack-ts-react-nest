import { Test, TestingModule } from '@nestjs/testing';
import { SpaController } from './spa.controller';

describe('SpaController', () => {
    let appController: SpaController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [SpaController],
            providers: [],
        }).compile();

        appController = app.get<SpaController>(SpaController);
    });

    describe('root', () => {
        it('should be defined', () => {
            expect(appController).toBeDefined();
        });
    });
});
