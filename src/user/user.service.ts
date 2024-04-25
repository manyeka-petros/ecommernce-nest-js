import { Injectable } from '@nestjs/common';
import { SignupDto } from './signUpDto';
import { SignInResponseDto } from './signInResponseDto';
import { User } from './userEntity';
import { SignInDto } from './signInDto';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: Repository<User>,
        private readonly authenticationService: AuthenticationService,
    ) {}

    async signUp(signupDto: SignupDto): Promise<SignInResponseDto> {
        // check if user is already present
        const existingUser = await this.userRepository.findByEmail(signupDto.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        // hash the password
        const encryptedPassword = this.hashPassword(signupDto.password);

        const user = new User(
            signupDto.firstName,
            signupDto.lastName,
            signupDto.email,
            encryptedPassword,
        );

        await this.userRepository.save(user);

        // create the token
        const authenticationToken = new AuthenticationToken(user);
        await this.authenticationService.saveConfirmationToken(authenticationToken);

        return { status: 'success', message: 'User created successfully' };
    }

    private hashPassword(password: string): string {
        // Implement your password hashing logic here
    }

    async signIn(signInDto: SignInDto): Promise <SignInResponseDto> {
        // find user by email
        const user = await this.userRepository.findByEmail(signInDto.email);
        
        if (!user) {
            throw new Error('User not found');
        }

        // hash the password
        const hashedPassword = this.hashPassword(signInDto.password);

        // compare the password in DB
        if (user.password !== hashedPassword) {
            throw new Error('Incorrect password');
        }

        // retrieve the token
        const token = await this.authenticationService.getToken(user);

        if (!token) {
            throw new Error('Token not found');
        }

        return { status: 'success', token: token.token };
    }
}
