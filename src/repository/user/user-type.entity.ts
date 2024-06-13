import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserType {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @OneToMany(() =>User, (user) => user.userstype)
    @JoinColumn({referencedColumnName:'id', name:'userstype'})
    users: User[];


    @CreateDateColumn()
    createeddate:number
    @CreateDateColumn()
    updateddate:number
}