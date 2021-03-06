import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('address')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cep: string;

  @Column()
  complement: string;

  @Column(CreateDateColumn)
  created_at: Date;

  @Column(UpdateDateColumn)
  updated_at: Date;
}

export default Address;
