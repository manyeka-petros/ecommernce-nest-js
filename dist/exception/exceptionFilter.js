"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const customException_1 = require("./customException");
const authenticationFailException_1 = require("./authenticationFailException");
let ExceptionFilter = exports.ExceptionFilter = class ExceptionFilter {
    use(req, res, next) {
        next();
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal Server Error';
        if (exception instanceof customException_1.CustomException || exception instanceof common_1.BadRequestException) {
            status = common_1.HttpStatus.BAD_REQUEST;
            message = exception.message;
        }
        else if (exception instanceof authenticationFailException_1.AuthenticationFailException) {
            status = common_1.HttpStatus.UNAUTHORIZED;
            message = exception.message;
        }
        response.status(status).json({ message });
    }
};
exports.ExceptionFilter = ExceptionFilter = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Catch)(customException_1.CustomException, authenticationFailException_1.AuthenticationFailException)
], ExceptionFilter);
//# sourceMappingURL=exceptionFilter.js.map