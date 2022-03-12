import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomMemberService } from './room-member.service';
import { CreateRoomMemberDto } from './dto/create-room-member.dto';

@Controller('room-member')
export class RoomMemberController {
  constructor(private readonly roomMemberService: RoomMemberService) {}

  @Post()
  create(@Body() createRoomMemberDto: CreateRoomMemberDto) {
    return this.roomMemberService.create(createRoomMemberDto);
  }

  @Get()
  findAll() {
    return this.roomMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomMemberService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomMemberService.remove(+id);
  }
}
