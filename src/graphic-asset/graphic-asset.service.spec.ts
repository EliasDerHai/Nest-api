import { Test, TestingModule } from '@nestjs/testing';
import { GraphicAssetService } from './graphic-asset.service';

describe('GraphicAssetService', () => {
  let service: GraphicAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphicAssetService],
    }).compile();

    service = module.get<GraphicAssetService>(GraphicAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
