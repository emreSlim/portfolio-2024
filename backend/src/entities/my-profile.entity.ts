import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'my_profile',
})
export class MyProfile {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  my_profile_id?: number;

  @Column({ type: 'varchar', length: 30 })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'varchar', length: 10 })
  first_name: string;

  @Column({ type: 'varchar', length: 10 })
  last_name: string;

  @Column({ type: 'varchar', length: 20 })
  nick_name: string;

  @Column({ type: 'varchar', length: 500 })
  introduction: string;

  @Column({ type: 'varchar', length: 5000 })
  about: string;
}
