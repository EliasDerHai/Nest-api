import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphicAssetModule } from './graphic-asset/graphic-asset.module';
import { DatabaseModule } from './database/database.module';
import { RoomModule } from './schafkopf/room/room.module';
import { RoomMemberModule } from './schafkopf/room-member/room-member.module';

@Module({
  imports: [GraphicAssetModule, DatabaseModule, RoomModule, RoomMemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
