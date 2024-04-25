import { Injectable } from '@nestjs/common';
import { AuthenticationToken } from './authenticationTokenEntity';
import { User } from 'src/user/userEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthenticationTokenService {
    constructor(@InjectRepository(AuthenticationToken)
        private  tokenRepository: Repository<AuthenticationToken>) {}

    async saveConfirmationToken(authenticationToken: AuthenticationToken): Promise<void> {
        await this.tokenRepository.save(authenticationToken);
    }

    async getToken(user: User): Promise <AuthenticationToken | null> {
        return this.tokenRepository.findByUser(user);
    }

    async getUser(token: string): Promise<User | null> {
        const authenticationToken = await this.tokenRepository.findByToken(token);
        return authenticationToken ? authenticationToken.user : null;
    }

    async authenticate(token: string): Promise<void> {
        if (!token) {
            throw new Error('Token not present');
        }
        const user = await this.getUser(token);
        if (!user) {
            throw new Error('Token not valid');
        }
    }
}
