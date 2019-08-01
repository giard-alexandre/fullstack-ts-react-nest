import {HttpModule, Module} from '@nestjs/common';
import {GlobalModule} from './global';
import {TaskModule} from './task/task.module';
import {RouterModule} from 'nest-router';

@Module({
    imports: [
        RouterModule.forRoutes([{
            path: '/api',
            module: ApiModule,
            children: [
                TaskModule
            ]
        }]),
        TaskModule,
        HttpModule,
        GlobalModule,
    ],
    controllers: [],
    providers: [],

})
export class ApiModule {
}
