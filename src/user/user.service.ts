import { Injectable, ResponseDecoratorOptions } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './userEntity';

import { SignupDto } from './signUpDto';
import { SignInDto } from './signInDto';
import * as bcrypt from 'bcrypt';
import { SignInResponseDto } from './signInResponseDto';
import { AuthenticationFailException } from 'src/exception/authenticationFailException';
import { CustomException } from 'src/exception/customException';
import { ResponseDto } from './responseDto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthenticationTokenService,
  ) {}

  async signUp(signupDto: SignupDto): Promise<ResponseDto> {
    const existingUser = await this.userRepository.findOne({ email: signupDto.email });
    if (existingUser) {
      throw new CustomException('user already present');
    }

    const hashedPassword = await bcrypt.hash(signupDto.password, 10); // Use bcrypt for secure hashing
    const user = new User(signupDto.firstName, signupDto.lastName, signupDto.email, hashedPassword);

    await this.userRepository.save(user);
    await this.authService.sendConfirmationEmail(user); // Assuming sendConfirmationEmail exists in AuthService

    return new ResponseDto('success', 'user created successfully');
  }

  async signIn(signInDto: SignInDto): Promise<SignInResponseDto> {
    const user = await this.userRepository.findOne({ email: signInDto.email });
    if (!user) {
      throw new AuthenticationFailException('user is not valid');
    }

    const isPasswordMatch = await bcrypt.compare(signInDto.password, user.password); // Use bcrypt for comparison
    if (!isPasswordMatch) {
      throw new AuthenticationFailException('wrong password');
    }

    const token = await this.authService.generateToken(user); // Assuming generateToken exists in AuthService
    return new SignInResponseDto('success', token);
  }
}