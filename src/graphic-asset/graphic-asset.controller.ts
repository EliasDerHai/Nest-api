import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GraphicAssetService } from './graphic-asset.service';
import { CreateGraphicAssetDto } from './dto/create-graphic-asset.dto';
import { UpdateGraphicAssetDto } from './dto/update-graphic-asset.dto';

@Controller('graphic-asset')
export class GraphicAssetController {
  constructor(private readonly graphicAssetService: GraphicAssetService) {}

  @Post()
  create(@Body() createGraphicAssetDto: CreateGraphicAssetDto) {
    return this.graphicAssetService.create(createGraphicAssetDto);
  }

  @Get()
  findAll() {
    return this.graphicAssetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.graphicAssetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGraphicAssetDto: UpdateGraphicAssetDto) {
    return this.graphicAssetService.update(+id, updateGraphicAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.graphicAssetService.remove(+id);
  }
}
