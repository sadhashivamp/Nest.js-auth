import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './signup.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body('username') username: string, @Body('email') email: string, @Body('password') password: string) {
    const newUser = await this.userService.createUser(username, email, password);
    return { message: 'User created successfully', user: newUser };
  }
}
