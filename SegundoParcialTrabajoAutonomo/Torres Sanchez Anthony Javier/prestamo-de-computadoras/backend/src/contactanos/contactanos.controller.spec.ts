import { Test, TestingModule } from '@nestjs/testing';
import { ContactanosController } from './contactanos.controller';
import { ContactanosService } from './contactanos.service';

describe('ContactanosController', () => {
  let controller: ContactanosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactanosController],
      providers: [ContactanosService],
    }).compile();

    controller = module.get<ContactanosController>(ContactanosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
