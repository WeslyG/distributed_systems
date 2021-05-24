import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Data base object
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;
}
