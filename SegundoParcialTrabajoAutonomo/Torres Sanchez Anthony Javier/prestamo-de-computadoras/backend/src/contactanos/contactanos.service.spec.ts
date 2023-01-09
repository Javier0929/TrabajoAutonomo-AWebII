import { Test, TestingModule } from '@nestjs/testing';
import { ContactanosService } from './contactanos.service';

describe('ContactanosService', () => {
  let service: ContactanosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactanosService],
    }).compile();

    service = module.get<ContactanosService>(ContactanosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
