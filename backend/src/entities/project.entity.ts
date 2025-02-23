import { Entity, Column, ColumnType } from 'json-relational-db';

export type ProjectName = string & { readonly brand: unique symbol };
export type ProjectDescription = string & { readonly brand: unique symbol };
export type ProjectUrl = string & { readonly brand: unique symbol };
export type ProjectMediaUrl = string & { readonly brand: unique symbol };
export type ProjectSourceCodeUrl = string & { readonly brand: unique symbol };
export type ProjectThumbnailUrl = string & { readonly brand: unique symbol };

export interface Project {
  project_id?: number;
  name: ProjectName;
  description: ProjectDescription;
  url: ProjectUrl;
  media_url: ProjectMediaUrl;
  thumbnail_url: ProjectThumbnailUrl;
  source_code_url: ProjectSourceCodeUrl;
}

export const projectEntity = new Entity<Project>('project', [
  new Column('project_id', ColumnType.SERIAL),
  new Column('name', ColumnType.STRING),
  new Column('description', ColumnType.STRING),
  new Column('url', ColumnType.STRING),
  new Column('media_url', ColumnType.STRING),
  new Column('thumbnail_url', ColumnType.STRING),
  new Column('source_code_url', ColumnType.STRING),
]);
