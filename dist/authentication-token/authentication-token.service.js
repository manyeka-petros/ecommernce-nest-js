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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationTokenService = void 0;
const common_1 = require("@nestjs/common");
const authenticationTokenEntity_1 = require("./authenticationTokenEntity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AuthenticationTokenService = exports.AuthenticationTokenService = class AuthenticationTokenService {
    constructor(tokenRepository) {
        this.tokenRepository = tokenRepository;
    }
    async saveConfirmationToken(authenticationToken) {
        await this.tokenRepository.save(authenticationToken);
    }
    async getToken(user) {
        return this.tokenRepository.findByUser(user);
    }
    async getUser(token) {
        const authenticationToken = await this.tokenRepository.findByToken(token);
        return authenticationToken ? authenticationToken.user : null;
    }
    async authenticate(token) {
        if (!token) {
            throw new Error('Token not present');
        }
        const user = await this.getUser(token);
        if (!user) {
            throw new Error('Token not valid');
        }
    }
};
exports.AuthenticationTokenService = AuthenticationTokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(authenticationTokenEntity_1.AuthenticationToken)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthenticationTokenService);
//# sourceMappingURL=authentication-token.service.js.map