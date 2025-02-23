import { Entity, Column, ColumnType } from 'json-relational-db';
import { myProfileEntity } from './my-profile.entity';

export type URL = string & { readonly brand: unique symbol };
export type PlatformName = string & { readonly brand: unique symbol };

export interface ProfessionalProfile {
  professional_profile_id?: number;
  platform_name: PlatformName;
  url: URL;
  my_profile_id: number;
}

export const professionalProfileEntity = new Entity<ProfessionalProfile>(
  'professional_profile',
  [
    new Column('professional_profile_id', ColumnType.SERIAL),
    new Column('platform_name', ColumnType.STRING),
    new Column('url', ColumnType.STRING),
    new Column('my_profile_id', myProfileEntity),
  ]
);
