import { Test, TestingModule } from '@nestjs/testing';
import { ManifestManagerService } from './manifest-manager.service';

describe('ManifestManagerService', () => {
    let service: ManifestManagerService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ManifestManagerService],
        }).compile();

        service = module.get<ManifestManagerService>(ManifestManagerService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
