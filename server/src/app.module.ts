import {Module} from '@nestjs/common';
import {ApiModule} from './api/api.module';
import {SpaModule} from './spa/spaModule';

/**
 * This file should theoretically never change.
 * Thank you
 */
@Module({
    imports: [
        ApiModule,
        SpaModule,
    ],
})
export class AppModule {
}
