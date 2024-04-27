import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomException extends Error {
  constructor(message: string = 'An unexpected error occurred.') {
    super(message);
    Object.setPrototypeOf(this, CustomException.prototype); // Ensure proper inheritance
  }

  serializeErrors(): { message: string } {
    return { message: this.message };
  }
}