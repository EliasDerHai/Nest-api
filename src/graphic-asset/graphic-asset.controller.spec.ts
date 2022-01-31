import { Test, TestingModule } from '@nestjs/testing';
import { GraphicAssetController } from './graphic-asset.controller';
import { GraphicAssetService } from './graphic-asset.service';

describe('GraphicAssetController', () => {
  let controller: GraphicAssetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraphicAssetController],
      providers: [GraphicAssetService],
    }).compile();

    controller = module.get<GraphicAssetController>(GraphicAssetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
