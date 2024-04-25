import { AuthenticationToken } from './authenticationTokenEntity';
import { User } from 'src/user/userEntity';
import { Repository } from 'typeorm';
export declare class AuthenticationTokenService {
    private tokenRepository;
    constructor(tokenRepository: Repository<AuthenticationToken>);
    saveConfirmationToken(authenticationToken: AuthenticationToken): Promise<void>;
    getToken(user: User): Promise<AuthenticationToken | null>;
    getUser(token: string): Promise<User | null>;
    authenticate(token: string): Promise<void>;
}
