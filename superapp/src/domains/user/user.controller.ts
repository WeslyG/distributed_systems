import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // CRUD
  // Create
  // Read
  // Update
  // Delete
  constructor(private readonly userService: UserService) {}

  @Get()
  findAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param() id: number) {
    return this.userService.getOneUser(id);
  }

  @Post()
  createUser(@Body() user) {
    return this.userService.createUser(user);
  }

  @Put()
  update(): string {
    return 'user updated';
  }

  // /user/:id/
  @Delete(':id')
  delete(@Param() id: number) {
    return this.userService.deleteUser(id);
  }
}
