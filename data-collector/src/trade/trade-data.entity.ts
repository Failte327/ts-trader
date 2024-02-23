import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TradeData {
  @PrimaryGeneratedColumn()
  resources: number

  @Column()
  timestamp: Date
}