import { Injectable } from '@nestjs/common';
import { CreateGraphicAssetDto } from './dto/create-graphic-asset.dto';
import { UpdateGraphicAssetDto } from './dto/update-graphic-asset.dto';

@Injectable()
export class GraphicAssetService {
  create(createGraphicAssetDto: CreateGraphicAssetDto) {
    return 'This action adds a new graphicAsset';
  }

  findAll() {
    return `This action returns all graphicAsset`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphicAsset`;
  }

  update(id: number, updateGraphicAssetDto: UpdateGraphicAssetDto) {
    return `This action updates a #${id} graphicAsset`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphicAsset`;
  }
}
