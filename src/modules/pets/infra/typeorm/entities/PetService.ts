import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import UserService from '@modules/users/infra/typeorm/entities/UserService';
import Pet from './Pet';

@Entity('petServices')
class PetService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userService_id: string;

  @ManyToOne(() => UserService)
  @JoinColumn({ name: 'userService_id' })
  userService: UserService;

  @Column()
  pet_id: string;

  @ManyToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;

  @Column()
  value: number;

  @Column()
  deliver: boolean;

  @Column()
  observation: string;

  @Column()
  formPayment: number;

  @Column()
  changeValue: number;

  @Column()
  numberInstallment: number;

  @Column(CreateDateColumn)
  created_at: Date;

  @Column(UpdateDateColumn)
  updated_at: Date;
}

export default PetService;
