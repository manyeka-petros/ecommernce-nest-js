import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationFailException extends Error {
  constructor(message: string = 'Authentication failed') {
    super(message);
  }
}