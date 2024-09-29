import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type URL = string & { readonly brand: unique symbol };
export type PlatformName = string & { readonly brand: unique symbol };

@Entity({
  name: 'professional_profile',
})
export class ProfessionalProfile {
  @PrimaryGeneratedColumn({ type: 'int' })
  professional_profile_id?: number;

  @Column({
    type: 'varchar',
    length: 20,
  })
  platform_name: PlatformName;

  @Column({
    type: 'varchar',
    length: 200,
  })
  url: URL;

  @Column({
    type: 'int',
  })
  my_profile_id: number;
}
