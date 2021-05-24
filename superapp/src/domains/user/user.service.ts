import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './dbo/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  getOneUser(param) {
    return this.userRepository.find({
      id: parseInt(param.id),
    });
  }

  createUser(user) {
    const createdUser = new User();
    createdUser.lastName = user.lastName;
    createdUser.name = user.name;
    return this.userRepository.save(createdUser);
  }

  // updateUser(user) {}

  deleteUser(param) {
    return this.userRepository.delete({
      id: parseInt(param.id),
    });
  }
}
