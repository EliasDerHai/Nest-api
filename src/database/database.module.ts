import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphicAsset } from '../graphic-asset/entities/graphic-asset.entity';
import { Room } from '../schafkopf/room/entities/room.entity';
import { RoomMember } from '../schafkopf/room-member/entities/room-member.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest-store',
      entities: [GraphicAsset, Room, RoomMember],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
