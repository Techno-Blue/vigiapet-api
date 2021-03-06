import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Address from './Address';

@Entity('petOwners')
class PetOwner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address_id: string;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column(CreateDateColumn)
  created_at: Date;

  @Column(UpdateDateColumn)
  updated_at: Date;
}

export default PetOwner;
