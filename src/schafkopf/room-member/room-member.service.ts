import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomMember } from './entities/room-member.entity';
import { CreateRoomMemberDto } from './dto/create-room-member.dto';

@Injectable()
export class RoomMemberService {

  constructor(@InjectRepository(RoomMember) private readonly roomMemberRepository: Repository<RoomMember>) {
  }

  async create(createRoomMemberDto: CreateRoomMemberDto) {
    const otherMembers = await this.roomMemberRepository.find({ where: { roomId: createRoomMemberDto.roomId } });

    if (otherMembers.length > 3){
      throw Error('Room is already full');
    }

    const roomMember = new RoomMember();
    roomMember.name = createRoomMemberDto.name;
    roomMember.roomId = createRoomMemberDto.roomId;
    roomMember.uid = createRoomMemberDto.uid;
    roomMember.position = otherMembers.length;

    return this.roomMemberRepository.save(roomMember);
  }

  findAll() {
    return this.roomMemberRepository.find();
  }

  findOne(id: number) {
    return this.roomMemberRepository.findOne(id);
  }

  remove(id: number) {
    return this.roomMemberRepository.delete(id);  }
}
