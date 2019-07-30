import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as findUp from 'find-up';

const IS_DEV = process.env.NODE_ENV !== 'production';

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor() {
        if (IS_DEV) {
            dotenv.config(findUp.sync('.env'));
        }
        this.envConfig = process.env;
    }

    getString(key: string): string {
        return this.envConfig[key];
    }

    getNumber(key: string): number {
        return parseInt(this.envConfig[key], 10);
    }
}
