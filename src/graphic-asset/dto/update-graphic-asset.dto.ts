import { PartialType } from '@nestjs/mapped-types';
import { CreateGraphicAssetDto } from './create-graphic-asset.dto';

export class UpdateGraphicAssetDto extends PartialType(CreateGraphicAssetDto) {}
