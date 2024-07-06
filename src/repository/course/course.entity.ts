import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseState } from "./course-state.entity";

@Entity()
export class Course{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name:string
    @Column()
    description:string
    @ManyToOne(() => CourseState, (State) => State.courses)
    state:CourseState
    @CreateDateColumn()
    createdday:Date
    @CreateDateColumn()
    updatedday:Date
}