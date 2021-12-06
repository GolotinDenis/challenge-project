import { Test, TestingModule } from '@nestjs/testing';
import { TailsService } from './tails.service';

describe('TailsService', () => {
  let service: TailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TailsService],
    }).compile();

    service = module.get<TailsService>(TailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
