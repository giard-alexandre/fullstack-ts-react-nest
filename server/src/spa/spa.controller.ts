import { Controller, Get, Render } from '@nestjs/common';
import { ManifestManagerService } from '../api/manifest-manager/manifest-manager.service';

@Controller()
export class SpaController {
    constructor(private manifestManager: ManifestManagerService) {
    }

    @Get('**')
    @Render('page')
    async root() {
        const manifest = await this.manifestManager.getManifest();
        return {manifest};
    }
}
