import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './signUpDto';
import { UserService } from './user.service';
import { SignInResponseDto } from './signInResponseDto';
import { SignInDto } from './signInDto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('signup')
    async signup(@Body() signupDto: SignupDto): Promise<SignInResponseDto> {
        return this.userService.signUp(signupDto);
    }

    @Post('signin')
    async signIn(@Body() signInDto: SignInDto): Promise <SignInResponseDto> {
        return this.userService.signIn(signInDto);
    }
}
