import { Repository } from 'typeorm';
import { AuthenticationToken } from './authenticationTokenEntity';
import { User } from 'src/user/userEntity';
export declare class AuthenticationService {
    private readonly tokenRepository;
    constructor(tokenRepository: Repository<AuthenticationToken>);
    saveConfirmationToken(token: AuthenticationToken): Promise<void>;
    getToken(user: User): Promise<AuthenticationToken | null>;
    getUser(token: string): Promise<User | null>;
    authenticate(token: string): Promise<void>;
}
