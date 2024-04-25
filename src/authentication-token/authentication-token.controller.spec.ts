import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationTokenController } from './authentication-token.controller';

describe('AuthenticationTokenController', () => {
  let controller: AuthenticationTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationTokenController],
    }).compile();

    controller = module.get<AuthenticationTokenController>(AuthenticationTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
