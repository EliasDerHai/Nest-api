import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphicAssetModule } from './graphic-asset/graphic-asset.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [GraphicAssetModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
