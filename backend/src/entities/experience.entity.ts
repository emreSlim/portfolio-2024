import { Entity, Column, ColumnType } from 'src/modules/json-db/';

export type Organization = string & { readonly brand: unique symbol };
export type Designation = string & { readonly brand: unique symbol };
export type StartingDate = Date & { readonly brand: unique symbol };
export type EndingDate = Date & { readonly brand: unique symbol };
export type WorkDescription = string & { readonly brand: unique symbol };

export interface Experience {
  experience_id?: number;
  organization: Organization;
  designation: Designation;
  starting_date: StartingDate;
  ending_date: EndingDate;
  work_description: WorkDescription;
}

export const experienceEntity = new Entity<Experience>('experience', [
  new Column('experience_id', ColumnType.SERIAL),
  new Column('organization', ColumnType.STRING),
  new Column('designation', ColumnType.STRING),
  new Column('starting_date', ColumnType.STRING),
  new Column('ending_date', ColumnType.STRING),
  new Column('work_description', ColumnType.STRING),
]);
