import { Module } from '@nestjs/common';
import { GraphicAssetService } from './graphic-asset.service';
import { GraphicAssetController } from './graphic-asset.controller';

@Module({
  controllers: [GraphicAssetController],
  providers: [GraphicAssetService]
})
export class GraphicAssetModule {}
