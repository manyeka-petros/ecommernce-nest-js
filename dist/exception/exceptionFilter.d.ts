import { NestMiddleware, HttpException, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
export declare class ExceptionFilter implements NestMiddleware {
    use(req: any, res: Response, next: Function): void;
    catch(exception: HttpException, host: ArgumentsHost): void;
}
