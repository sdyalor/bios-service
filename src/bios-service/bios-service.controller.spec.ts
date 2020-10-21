import { Test, TestingModule } from '@nestjs/testing';
import { BiosServiceController } from './bios-service.controller';

describe('BiosServiceController', () => {
  let controller: BiosServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiosServiceController],
    }).compile();

    controller = module.get<BiosServiceController>(BiosServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
