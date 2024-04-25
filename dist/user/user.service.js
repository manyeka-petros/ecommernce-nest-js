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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const userEntity_1 = require("./userEntity");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, authenticationService) {
        this.userRepository = userRepository;
        this.authenticationService = authenticationService;
    }
    async signUp(signupDto) {
        const existingUser = await this.userRepository.findByEmail(signupDto.email);
        if (existingUser) {
            throw new Error('User already exists');
        }
        const encryptedPassword = this.hashPassword(signupDto.password);
        const user = new userEntity_1.User(signupDto.firstName, signupDto.lastName, signupDto.email, encryptedPassword);
        await this.userRepository.save(user);
        const authenticationToken = new AuthenticationToken(user);
        await this.authenticationService.saveConfirmationToken(authenticationToken);
        return { status: 'success', message: 'User created successfully' };
    }
    hashPassword(password) {
    }
    async signIn(signInDto) {
        const user = await this.userRepository.findByEmail(signInDto.email);
        if (!user) {
            throw new Error('User not found');
        }
        const hashedPassword = this.hashPassword(signInDto.password);
        if (user.password !== hashedPassword) {
            throw new Error('Incorrect password');
        }
        const token = await this.authenticationService.getToken(user);
        if (!token) {
            throw new Error('Token not found');
        }
        return { status: 'success', token: token.token };
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof Repository !== "undefined" && Repository) === "function" ? _a : Object, typeof (_b = typeof AuthenticationService !== "undefined" && AuthenticationService) === "function" ? _b : Object])
], UserService);
//# sourceMappingURL=user.service.js.map