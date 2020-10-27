import { Entity, Column } from 'typeorm';

@Entity()
export class User {
    @Column({ name: 'CONTANT_LOGIN'})
    username: string;

    @Column({ name: 'CONTACT_PASS'})
    password: string;

}