import { Controller, Get, Render } from '@nestjs/common';
import { ManifestManagerService } from './manifest-manager/manifest-manager.service';

@Controller()
export class AppController {
    constructor(private manifestManager: ManifestManagerService) {
    }

    @Get('**')
    @Render('page')
    async root() {
        const manifest = await this.manifestManager.getManifest();
        return {manifest};
    }
}
