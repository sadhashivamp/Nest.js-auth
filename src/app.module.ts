import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './signup/signup.controller';
import { UserService } from './signup/signup.service';
import { UserSchema } from './signup/signup.model';
import { JwtModule } from '@nestjs/jwt';
import tokenIs from './config/generateToken';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs_db'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: tokenIs, // Replace with your actual secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  controllers: [UserController, LoginController],
  providers: [UserService, LoginService],
})
export class AppModule {}
