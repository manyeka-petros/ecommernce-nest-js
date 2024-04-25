import { SignupDto } from './signUpDto';
import { UserService } from './user.service';
import { SignInResponseDto } from './signInResponseDto';
import { SignInDto } from './signInDto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(signupDto: SignupDto): Promise<SignInResponseDto>;
    signIn(signInDto: SignInDto): Promise<SignInResponseDto>;
}
