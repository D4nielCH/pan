import { Controller, Get } from '@nestjs/common';
import { Course } from 'src/repository/course/course.entity';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private courseservice:CourseService) {}

    @Get('states')
    getUserTypes(){
        return this.courseservice.getAllUserTypes();
    }

    @Get('getall')
    getUser(){
        return this.courseservice.getAllUser();
    }
}
