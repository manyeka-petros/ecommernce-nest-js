"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const userEntity_1 = require("./userEntity");
const bcrypt = require("bcrypt");
const signInResponseDto_1 = require("./signInResponseDto");
const authenticationFailException_1 = require("../exception/authenticationFailException");
const customException_1 = require("../exception/customException");
const responseDto_1 = require("./responseDto");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async signUp(signupDto) {
        const existingUser = await this.userRepository.findOne({ email: signupDto.email });
        if (existingUser) {
            throw new customException_1.CustomException('user already present');
        }
        const hashedPassword = await bcrypt.hash(signupDto.password, 10);
        const user = new userEntity_1.User(signupDto.firstName, signupDto.lastName, signupDto.email, hashedPassword);
        await this.userRepository.save(user);
        await this.authService.sendConfirmationEmail(user);
        return new responseDto_1.ResponseDto('success', 'user created successfully');
    }
    async signIn(signInDto) {
        const user = await this.userRepository.findOne({ email: signInDto.email });
        if (!user) {
            throw new authenticationFailException_1.AuthenticationFailException('user is not valid');
        }
        const isPasswordMatch = await bcrypt.compare(signInDto.password, user.password);
        if (!isPasswordMatch) {
            throw new authenticationFailException_1.AuthenticationFailException('wrong password');
        }
        const token = await this.authService.generateToken(user);
        return new signInResponseDto_1.SignInResponseDto('success', token);
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(userEntity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeof (_a = typeof AuthenticationTokenService !== "undefined" && AuthenticationTokenService) === "function" ? _a : Object])
], UserService);
//# sourceMappingURL=user.service.js.map