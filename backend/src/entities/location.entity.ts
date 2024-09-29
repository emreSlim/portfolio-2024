import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type Country = string & { readonly brand: unique symbol };
export type City = string & { readonly brand: unique symbol };
export type State = string & { readonly brand: unique symbol };
export type LocationType = 'current' | 'permanent';

@Entity({
  name: 'location',
})
export class Location {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  location_id?: number;

  @Column({ type: 'varchar', length: 20 })
  city: City;

  @Column({ type: 'varchar', length: 20 })
  state: State;

  @Column({ type: 'varchar', length: 20 })
  country: Country;

  @Column({ type: 'varchar', length: 20 })
  location_type: LocationType;

  @Column({
    type: 'int',
  })
  my_profile_id: number;
}
