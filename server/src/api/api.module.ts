import { HttpModule, Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { GlobalModule } from './global';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        RouterModule.forRoutes([{
            path: '/api',
            module: ApiModule,
            children: [
                UserModule
            ]
        }]),
        HttpModule,
        GlobalModule,
        UserModule,
    ],
    controllers: [],
    providers: [],

})
export class ApiModule {
}
