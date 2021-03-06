import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Animal from './Animal';

@Entity('breeds')
class Breed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  animal_id: string;

  @ManyToOne(() => Animal)
  @JoinColumn({ name: 'animal_id' })
  animal: Animal;

  @Column()
  name: string;

  @Column(CreateDateColumn)
  created_at: Date;

  @Column(UpdateDateColumn)
  updated_at: Date;
}

export default Breed;
