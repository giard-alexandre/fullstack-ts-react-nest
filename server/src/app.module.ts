import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { ApiModule } from './api/api.module';
import { SpaModule } from './spa/spaModule';

const routes: Routes = [
    {
        path: '/api',
        module: ApiModule,
    }
];

@Module({
    imports: [
        RouterModule.forRoutes(routes), // setup the routes
        ApiModule,
        SpaModule
    ],
})
export class AppModule {
}
