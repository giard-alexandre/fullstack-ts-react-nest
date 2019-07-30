import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { User } from '../../../../shared/entities/user/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers(): Observable<User[]> {
        const user = new User();
        user.name.first = 'FirstName';
        user.name.last = 'LastName';
        return of([user]);
    }
}
