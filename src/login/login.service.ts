import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import tokenIs from 'src/config/generateToken';

@Injectable()
export class LoginService {
  constructor(private readonly jwtService: JwtService) {}

  async login(email: string, password: string): Promise<string> {
    // Generate JWT token
    const payload = { email };

    return this.jwtService.sign(payload, { secret: tokenIs }); 
  }
}


