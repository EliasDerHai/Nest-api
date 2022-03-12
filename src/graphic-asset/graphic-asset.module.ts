import { Module } from '@nestjs/common';
import { GraphicAssetService } from './graphic-asset.service';
import { GraphicAssetController } from './graphic-asset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphicAsset } from './entities/graphic-asset.entity';

@Module({
  controllers: [GraphicAssetController],
  providers: [GraphicAssetService],
  imports: [TypeOrmModule.forFeature([GraphicAsset])]

})
export class GraphicAssetModule {}
