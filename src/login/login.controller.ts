import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('user')
export class LoginController {
  constructor(private readonly authService: LoginService) {}

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    const token = await this.authService.login(email, password);
    return { access_token: token };
  }
}
