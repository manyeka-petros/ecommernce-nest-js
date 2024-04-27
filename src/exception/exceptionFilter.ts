import { Injectable, NestMiddleware, HttpException, HttpStatus, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
import { CustomException } from './customException';
import { AuthenticationFailException } from './authenticationFailException';

@Injectable()
@Catch(CustomException, AuthenticationFailException)
export class ExceptionFilter implements NestMiddleware {
  use(req: any, res: Response, next: Function) {
    next();
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';

    if (exception instanceof CustomException || exception instanceof BadRequestException) {
      status = HttpStatus.BAD_REQUEST;
      message = exception.message;
    } else if (exception instanceof AuthenticationFailException) {
      status = HttpStatus.UNAUTHORIZED;
      message = exception.message;
    }

    response.status(status).json({ message });
  }
}