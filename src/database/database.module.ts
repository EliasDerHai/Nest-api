import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphicAsset } from '../graphic-asset/entities/graphic-asset.entity';
import { Room } from '../schafkopf/room/entities/room.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'dnd-store',
      entities: [GraphicAsset, Room],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
