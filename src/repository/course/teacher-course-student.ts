import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class TeacherCourseStudent{

@PrimaryGeneratedColumn()
id:number
@Column()
TecaherCourse:string
@Column()
user:number
@CreateDateColumn()
createdatedday:Date
@CreateDateColumn()
updatedday:Date

}