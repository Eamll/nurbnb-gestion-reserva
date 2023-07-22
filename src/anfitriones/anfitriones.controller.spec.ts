import { Test, TestingModule } from '@nestjs/testing';
import { AnfitrionesController } from './anfitriones.controller';
import { AnfitrionesService } from './anfitriones.service';

describe('AnfitrionesController', () => {
  let controller: AnfitrionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnfitrionesController],
      providers: [AnfitrionesService],
    }).compile();

    controller = module.get<AnfitrionesController>(AnfitrionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
