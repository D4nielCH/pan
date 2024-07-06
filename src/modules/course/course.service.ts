import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseState } from 'src/repository/course/course-state.entity';
import { Course } from 'src/repository/course/course.entity';
import { UserType } from 'src/repository/user/user-type.entity';
import { User } from 'src/repository/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {

    constructor(
    @InjectRepository(CourseState)
    private courseStateRepository:Repository<CourseState>,

    @InjectRepository(Course)
    private courseRepository: Repository<Course>
    ){}
    

    getAllUserTypes(){
        return this.courseStateRepository.find({relations:['courses']})
    }
    
    getAllUser(){
        return this.courseRepository.find({relations:['state']})
    }
}



