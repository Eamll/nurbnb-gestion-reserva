import { Test, TestingModule } from '@nestjs/testing';
import { AnfitrionesService } from './anfitriones.service';

describe('AnfitrionesService', () => {
  let service: AnfitrionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnfitrionesService],
    }).compile();

    service = module.get<AnfitrionesService>(AnfitrionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
