import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphicAsset } from '../graphic-asset/entities/graphic-asset.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'dnd-store',
      entities: [GraphicAsset],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
