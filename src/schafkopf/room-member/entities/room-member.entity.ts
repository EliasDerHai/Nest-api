import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RoomMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  roomId: number;

  @Column()
  position: number;

  @Column()
  uid: number;
}
