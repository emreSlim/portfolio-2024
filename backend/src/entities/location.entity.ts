import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'location',
})
export class Location {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  location_id?: number;

  @Column({ type: 'varchar', length: 20 })
  city: string;

  @Column({ type: 'varchar', length: 20 })
  state: string;

  @Column({ type: 'varchar', length: 20 })
  country: string;

  @Column({ type: 'varchar', length: 20 })
  location_type: 'current' | 'permanent';

  @Column({
    type: 'int',
  })
  my_profile_id: number;
}
