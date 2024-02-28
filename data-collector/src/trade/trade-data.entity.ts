import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TradeData {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  resources: string

  @Column()
  timestamp: Date
}