import { Injectable } from '@nestjs/common';
import { User } from '../../../../../shared/entities/user/user.entity';

@Injectable()
export class UserService {
    getAlUsers(): User[] {
        return [new User({defaultColor: 'somehitng', defaultFont: 'sm,ehtun', name: {first: 'first', last: 'last'}})];
    }
}
