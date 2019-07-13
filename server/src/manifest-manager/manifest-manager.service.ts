import { HttpService, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { IS_DEV, WEBPACK_PORT } from '../../config';

export interface IManifest {
    'main.js': string;
    'vendors.js': string;
    'logo.png': string;
}

@Injectable()
export class ManifestManagerService {
    constructor(private readonly http: HttpService) {
    }

    public async getManifest(): Promise<IManifest> {
        let manifest: IManifest;
        if (IS_DEV) {
            // load from webpack dev server
            manifest = await this.getManifestFromWebpack();
        } else {
            // read from file system
            const manifestStr = fs.readFileSync(path.join(process.cwd(), 'dist', 'statics', 'manifest.json'), 'utf-8').toString();
            manifest = JSON.parse(manifestStr);
        }
        return manifest;
    }

    private getManifestFromWebpack(): Promise<IManifest> {
        return new Promise((resolve, reject) => {
            this.http.get(`http://localhost:${WEBPACK_PORT}/statics/manifest.json`).subscribe(
                res => resolve(res.data as IManifest),
                error => reject(error)
            );
        });
    }
}
