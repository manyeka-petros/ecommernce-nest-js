import { SignupDto } from './signUpDto';
import { SignInResponseDto } from './signInResponseDto';
import { User } from './userEntity';
import { SignInDto } from './signInDto';
import { Repository } from 'typeorm';
import { AuthenticationTokenService } from 'src/authentication-token/authentication-token.service';
export declare class UserService {
    private userRepository;
    private readonly authenticationService;
    constructor(userRepository: Repository<User>, authenticationService: AuthenticationTokenService);
    signUp(signupDto: SignupDto): Promise<SignInResponseDto>;
    private hashPassword;
    signIn(signInDto: SignInDto): Promise<SignInResponseDto>;
}
