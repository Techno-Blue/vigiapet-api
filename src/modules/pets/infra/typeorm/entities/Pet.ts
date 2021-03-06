import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Breed from './Breed';
import PetOwner from './PetOwner';

@Entity('pets')
class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  breed_id: string;

  @ManyToOne(() => Breed)
  @JoinColumn({ name: 'breed_id' })
  breed: Breed;

  @Column()
  petOwner_id: string;

  @ManyToOne(() => PetOwner)
  @JoinColumn({ name: 'petOwner_id' })
  petOwner: PetOwner;

  @Column()
  name: string;

  @Column()
  animalSize: number;

  @Column()
  petSex: number;

  @Column(CreateDateColumn)
  created_at: Date;

  @Column(UpdateDateColumn)
  updated_at: Date;
}

export default Pet;
