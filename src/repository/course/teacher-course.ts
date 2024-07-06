import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity() 
export class TeacherCourse {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    course:number
    @Column()
    user:number
    @Column()
    hours:number
    @Column()
    day:string
    @CreateDateColumn()
    createdday:Date
    @CreateDateColumn()
    updatedday:Date
}