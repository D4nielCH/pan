import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/repository/user/user.entity';

@Controller('user')
export class UserController {

    constructor(private userService:UserService) {}

    
    @Get('getAll')
getUsers() {
  return this.userService.getAllUser();
}

@Post('create')

createUser(@Body() body: User) {
  return this.userService.createUser(body);
}

@Patch(':id')
updateUser(@Body() body:Partial<User> , @Param('id') id:number) {
  console.log()
  return this.userService.updateUser(body, id)
}
}