import { Test, TestingModule } from '@nestjs/testing';
import { RoomMemberController } from './room-member.controller';
import { RoomMemberService } from './room-member.service';

describe('RoomMemberController', () => {
  let controller: RoomMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomMemberController],
      providers: [RoomMemberService],
    }).compile();

    controller = module.get<RoomMemberController>(RoomMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
