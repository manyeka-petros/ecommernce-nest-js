import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiResponse {
  constructor(public readonly success: boolean, public readonly message: string) {}

  getTimestamp(): string {
    return new Date().toISOString();
  }
}
