import { Repository } from 'typeorm';
import { User } from './userEntity';
import { AuthenticationTokenService } from 'src/authentication-token/authentication-token.service';
import { SignupDto } from './signUpDto';
import { SignInDto } from './signInDto';
import { SignInResponseDto } from './signInResponseDto';
import { ResponseDto } from './responseDto';
export declare class UserService {
    private readonly userRepository;
    private readonly authService;
    constructor(userRepository: Repository<User>, authService: AuthenticationTokenService);
    signUp(signupDto: SignupDto): Promise<ResponseDto>;
    signIn(signInDto: SignInDto): Promise<SignInResponseDto>;
}
