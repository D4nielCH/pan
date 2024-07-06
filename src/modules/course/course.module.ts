import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseState } from 'src/repository/course/course-state.entity';
import { Course } from 'src/repository/course/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseService } from './course.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([CourseState, Course])
  ],
  providers: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}
