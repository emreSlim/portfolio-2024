import { Entity, Column, ColumnType } from 'src/modules/json-db/';
import { myProfileEntity } from './my-profile.entity';

export type Country = string & { readonly brand: unique symbol };
export type City = string & { readonly brand: unique symbol };
export type State = string & { readonly brand: unique symbol };
export type LocationType = 'current' | 'permanent';

export interface Location {
  location_id?: number;
  city: City;
  state: State;
  country: Country;
  location_type: LocationType;
  my_profile_id: number;
}

export const locationEntity = new Entity<Location>('location', [
  new Column('location_id', ColumnType.SERIAL),
  new Column('city', ColumnType.STRING),
  new Column('state', ColumnType.STRING),
  new Column('country', ColumnType.STRING),
  new Column('location_type', ColumnType.STRING),
  new Column('my_profile_id', myProfileEntity),
]);
