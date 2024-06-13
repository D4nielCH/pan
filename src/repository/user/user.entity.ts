import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { UserType } from "./user-type.entity"

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name:string
    @Column()
    lastName:string
    @Column()
    password:number
    @Column({unique: true})
    email:string
    @Column({nullable: true})
    adrress:string
    @Column()
    birthday:string
    @Column()
    usertype:number
    @CreateDateColumn()
    createeddate: Date
    @CreateDateColumn()
    updateddate: Date

    @ManyToOne(()=> UserType)
    @JoinColumn
    ({referencedColumnName:'id', name:'usertype'})
    userstype: UserType

    @CreateDateColumn()
    createdday: Date;
    @UpdateDateColumn()
    updatedday:Date;
}