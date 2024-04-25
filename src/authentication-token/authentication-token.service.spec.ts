import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationTokenService } from './authentication-token.service';

describe('AuthenticationTokenService', () => {
  let service: AuthenticationTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthenticationTokenService],
    }).compile();

    service = module.get<AuthenticationTokenService>(AuthenticationTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
