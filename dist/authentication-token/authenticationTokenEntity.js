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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationToken = void 0;
const userEntity_1 = require("../user/userEntity");
const typeorm_1 = require("typeorm");
let AuthenticationToken = exports.AuthenticationToken = class AuthenticationToken {
    constructor(user) {
        this.user = user;
        this.createdDate = new Date();
        this.token = this.generateToken();
    }
    generateToken() {
        return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AuthenticationToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthenticationToken.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_date' }),
    __metadata("design:type", Date)
], AuthenticationToken.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => userEntity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", userEntity_1.User)
], AuthenticationToken.prototype, "user", void 0);
exports.AuthenticationToken = AuthenticationToken = __decorate([
    (0, typeorm_1.Entity)('tokens'),
    __metadata("design:paramtypes", [userEntity_1.User])
], AuthenticationToken);
//# sourceMappingURL=authenticationTokenEntity.js.map