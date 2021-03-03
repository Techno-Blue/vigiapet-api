import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import PetService from './PetService';
import UserServiceStep from './UserServiceStep';

@Entity('petServiceSteps')
class PetServiceStep {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userServiceStep_id: string;

  @ManyToOne(() => UserServiceStep)
  @JoinColumn({ name: 'userServiceStep_id' })
  userServiceStep: UserServiceStep;

  @Column()
  petService_id: string;

  @ManyToOne(() => PetService)
  @JoinColumn({ name: 'petService_id' })
  petService: PetService;

  @Column()
  status: number;

  @Column()
  observation: string;

  @Column('timestamp with time zone')
  startDate: Date;

  @Column('timestamp with time zone')
  endDate: Date;

  @Column(CreateDateColumn)
  created_at: Date;

  @Column(UpdateDateColumn)
  updated_at: Date;
}

export default PetServiceStep;
