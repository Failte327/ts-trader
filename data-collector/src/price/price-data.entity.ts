import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PriceData {
  @PrimaryGeneratedColumn()
  symbol: string;

  @Column()
  price: number;

  @Column()
  timestamp: Date;

  @Column()
  buyprice: number = null;
}
