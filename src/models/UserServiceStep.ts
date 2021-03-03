import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import UserService from './UserService';

@Entity('userServiceSteps')
class UserServiceStep {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userService_id: string;

  @ManyToOne(() => UserService)
  @JoinColumn({ name: 'userService_id' })
  userService: UserService;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @Column()
  stepOrder: number;

  @Column(CreateDateColumn)
  created_at: Date;

  @Column(UpdateDateColumn)
  updated_at: Date;
}

export default UserServiceStep;
