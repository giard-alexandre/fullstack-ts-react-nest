import { Controller, Get, Render } from '@nestjs/common';
import { ManifestManagerService } from './manifest-manager/manifest-manager.service';

@Controller()
export class ApiController {
    constructor(private manifestManager: ManifestManagerService) {
    }

    @Get('/')
    async root() {
        return 'Hello World';
    }
}
