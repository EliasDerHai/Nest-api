import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GraphicAssetService } from './graphic-asset.service';
import { UpdateGraphicAssetDto } from './dto/update-graphic-asset.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Request } from 'express';

export const nameUploadFile = (
  req: Request,
  file: Express.Multer.File,
  callback: (error: Error | null, filename: string) => void,
): void => {
  const extension = file.originalname.split('.').pop();
  callback(null, Date.now() + '.' + extension);
};

@Controller('graphic-asset')
export class GraphicAssetController {
  constructor(private readonly graphicAssetService: GraphicAssetService) {
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload',
        filename: nameUploadFile,
      }),
    }),
  )
  async uploadedFile(@UploadedFile() file: Express.Multer.File) {
    return {
      originalname: file.originalname,
      filename: file.filename,
    };
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
