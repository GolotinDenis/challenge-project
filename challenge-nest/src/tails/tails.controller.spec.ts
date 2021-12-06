import { Test, TestingModule } from '@nestjs/testing';
import { TailsController } from './tails.controller';

describe('TailsController', () => {
  let controller: TailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TailsController],
    }).compile();

    controller = module.get<TailsController>(TailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
