import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";

@Entity()
export class CourseState{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name:string
                 
    @OneToMany(() => Course,(course) => course.state)
    courses: Course[]

    @CreateDateColumn()
    createdday:Date
    @CreateDateColumn()
    updatedday:Date
}