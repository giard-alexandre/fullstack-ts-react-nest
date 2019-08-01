import { Test, TestingModule } from '@nestjs/testing';
import { V1UserController } from './v1.user.controller';

describe('User Controller', () => {
  let controller: V1UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1UserController],
    }).compile();

    controller = module.get<V1UserController>(V1UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
