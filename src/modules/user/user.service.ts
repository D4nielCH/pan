import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/repository/user/user-type.entity';
import { User } from 'src/repository/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
    @InjectRepository(UserType)
    private userTypeRepository:Repository<UserType>,

    @InjectRepository(User)
    private userRepository: Repository<User>
    ){}
    

    getAllUserTypes(){
        return this.userTypeRepository.find({relations:['users']})
    }
    
    getAllUser(){
        return this.userRepository.find({relations:['userstype']})
    }

    createUser(user: User) {
        return this.userRepository.save(user).then((user) => user.id);
    }

    updateUser(user:Partial<User> , id:number) {
        console.log()
        return this.userRepository.update(id, user).then((response) => response.affected > 0)
      }
}



