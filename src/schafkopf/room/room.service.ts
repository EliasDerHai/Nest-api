import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {

  constructor(@InjectRepository(Room) private readonly roomRepository: Repository<Room>) {
  }

  create(createRoomDto: CreateRoomDto) {
    const room = new Room();
    room.name = createRoomDto.name;
    return this.roomRepository.save(room);
  }

  findAll() {
    return this.roomRepository.find();
  }

  findOne(id: number) {
    return this.roomRepository.findOne(id);
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    const room = await this.roomRepository.findOne(id);
    room.name = updateRoomDto.name
    return this.roomRepository.save(room);
  }

  remove(id: number) {
    return this.roomRepository.delete(id);  }
}
