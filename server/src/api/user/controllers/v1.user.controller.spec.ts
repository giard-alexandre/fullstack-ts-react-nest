import { Test, TestingModule } from '@nestjs/testing';
import {V1TaskController} from './v1.task.controller';

describe('User Controller', () => {
  let controller: V1TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1TaskController],
    }).compile();

    controller = module.get<V1TaskController>(V1TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
