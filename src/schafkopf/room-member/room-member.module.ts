import { Module } from '@nestjs/common';
import { RoomMemberService } from './room-member.service';
import { RoomMemberController } from './room-member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMember } from './entities/room-member.entity';

@Module({
  controllers: [RoomMemberController],
  providers: [RoomMemberService],
  imports: [TypeOrmModule.forFeature([RoomMember])]
})
export class RoomMemberModule {}
