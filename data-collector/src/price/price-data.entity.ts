import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PriceData {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  symbol: string;

  @Column()
  price: string;

  @Column()
  timestamp: Date;

  @Column()
  buyprice: number = null;
}
