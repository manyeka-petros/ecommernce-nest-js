

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthenticationToken } from './authenticationTokenEntity';
import { User } from 'src/user/userEntity';
import { AuthenticationFailException } from 'src/exception/authenticationFailException';
// Import custom exceptions (optional)

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(AuthenticationToken)
    private readonly tokenRepository: Repository<AuthenticationToken>,
  ) {}

  async saveConfirmationToken(token: AuthenticationToken): Promise<void> {
    await this.tokenRepository.save(token);
  }

  async getToken(user: User): Promise<AuthenticationToken | null> {
    return await this.tokenRepository.findOne({where: user });
  }

  async getUser(token: string): Promise<User | null> {
    const authenticationToken = await this.tokenRepository.findOne({where: {token} });
    return authenticationToken?.user || null; // Optional chaining for nullish coalescing
  }

  async authenticate(token: string): Promise<void> {
    if (!token) {
      throw new AuthenticationFailException('token not present');
    }

    const user = await this.getUser(token);
    if (!user) {
      throw new AuthenticationFailException('token not valid');
    }
  }
}