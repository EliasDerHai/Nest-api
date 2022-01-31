import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GraphicAsset {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  absolutePath: string;

  @Column()
  size: number;

}
