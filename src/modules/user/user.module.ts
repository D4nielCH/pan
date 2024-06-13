import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/repository/user/user.entity';
import { UserType } from 'src/repository/user/user-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports:[
    TypeOrmModule.forFeature([UserType, User])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
