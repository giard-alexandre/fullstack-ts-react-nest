import { Controller, Get } from '@nestjs/common';
import { User } from '@shared/entities/user/user.entity';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Controller('v1/user')
export class V1UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    getTasks(): Observable<User[]> {
        return of(this.userService.getAlUsers());
    }
}
