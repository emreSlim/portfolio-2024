import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  platform_name: string;
  @Column({
    type: 'varchar',
    length: 200,
  })
  url: string;
  @Column({
    type: 'int',
  })
  my_profile_id: number;
}
