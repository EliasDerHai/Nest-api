import { Test, TestingModule } from '@nestjs/testing';
import { GraphicAssetController, nameUploadFile } from './graphic-asset.controller';
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

  it('should name uploaded files by date', (done) => {
    const cb = (error: Error | null, filename: string) => {
      const [millis, ext] = filename.split('.');
      expect(Math.abs(Number.parseInt(millis) - Date.now())).toBeLessThan(10);
      expect(ext).toEqual('jpg');
      done();
    }
    nameUploadFile(null, multerMockFile, cb);
  });
});


const multerMockFile = {
  fieldname: 'fieldname',
  originalname: 'originalname.jpg',
  encoding: 'encoding',
  mimetype: 'mimetype',
  size: 123,
  stream: null,
  destination: 'destination',
  filename: 'filename',
  path: 'path',
  buffer: null,
}
