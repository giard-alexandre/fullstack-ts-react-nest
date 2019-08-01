import { Module } from '@nestjs/common';
import { V1UserController } from './controllers/v1.user.controller';
import { UserService } from './services/user.service';

@Module({
    controllers: [V1UserController],
    providers: [UserService],
})
export class UserModule {
}
