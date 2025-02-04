import { Entity, Column, ColumnType } from 'src/modules/json-db/';

export type Email = string & { readonly brand: unique symbol };
export type Phone = string & { readonly brand: unique symbol };
export type FirstName = string & { readonly brand: unique symbol };
export type LastName = string & { readonly brand: unique symbol };
export type NickName = string & { readonly brand: unique symbol };
export type Introduction = string & { readonly brand: unique symbol };
export type About = string & { readonly brand: unique symbol };

export interface MyProfile {
  my_profile_id: number;
  email: Email;
  phone: Phone;
  first_name: FirstName;
  last_name: LastName;
  nick_name: NickName;
  introduction: Introduction;
  about: About;
  image_url: string;
}

export const myProfileEntity = new Entity<MyProfile>('my_profile', [
  new Column('my_profile_id', ColumnType.NUMBER),
  new Column('email', ColumnType.STRING),
  new Column('phone', ColumnType.STRING),
  new Column('first_name', ColumnType.STRING),
  new Column('last_name', ColumnType.STRING),
  new Column('nick_name', ColumnType.STRING),
  new Column('introduction', ColumnType.STRING),
  new Column('about', ColumnType.STRING),
  new Column('image_url', ColumnType.STRING),
]);
