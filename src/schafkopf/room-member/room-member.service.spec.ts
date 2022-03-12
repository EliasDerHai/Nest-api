import { Test, TestingModule } from '@nestjs/testing';
import { RoomMemberService } from './room-member.service';

describe('RoomMemberService', () => {
  let service: RoomMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomMemberService],
    }).compile();

    service = module.get<RoomMemberService>(RoomMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
