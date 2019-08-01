import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

/**
 *  Abstract class to define the base fields and columns for an Entity.
 * @param T The type of the child class inheriting from {@link BaseEntity}
 */
export abstract class EntityBase<T> {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @VersionColumn()
    version: number;

    /**
     * @param {T}   init  The initialization parameters for the entity.
     * @returns {T} New instance of type {@link T}.
     */
    constructor(init?: Partial<T>) {
        Object.assign(this, init);
    }
}
