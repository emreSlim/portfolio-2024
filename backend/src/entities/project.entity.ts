import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type ProjectName = string & { readonly brand: unique symbol };
export type ProjectDescription = string & { readonly brand: unique symbol };
export type ProjectUrl = string & { readonly brand: unique symbol };
export type ProjectMediaUrl = string & { readonly brand: unique symbol };
export type ProjectSourceCodeUrl = string & { readonly brand: unique symbol };
export type ProjectThumbnailUrl = string & { readonly brand: unique symbol };

@Entity({
  name: 'project',
})
export class Project {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  project_id?: number;

  @Column({ type: 'varchar', length: 50 })
  name: ProjectName;

  @Column({ type: 'varchar', length: 2000 })
  description: ProjectDescription;

  @Column({ type: 'varchar', length: 500 })
  url: ProjectUrl;

  @Column({ type: 'varchar', length: 500 })
  media_url: ProjectMediaUrl;

  @Column({ type: 'varchar', length: 500 })
  thumbnail_url: ProjectThumbnailUrl;

  @Column({ type: 'varchar', length: 500 })
  source_code_url: ProjectSourceCodeUrl;
}
