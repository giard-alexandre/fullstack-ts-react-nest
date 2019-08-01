import { Column, Entity } from 'typeorm';
import { EntityBase } from '../entityBase';
import { Name } from '../partials/name';

@Entity()
export class User extends EntityBase<User> {

    @Column(type => Name)
    name: Name;

    @Column()
    defaultFont: string;

    @Column()
    defaultColor: string;
}
