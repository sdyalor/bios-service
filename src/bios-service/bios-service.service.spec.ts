import { Test, TestingModule } from '@nestjs/testing';
import { BiosServiceService } from './bios-service.service';

describe('BiosServiceService', () => {
  let service: BiosServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiosServiceService],
    }).compile();

    service = module.get<BiosServiceService>(BiosServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
