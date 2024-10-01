import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type Email = string & { readonly brand: unique symbol };
export type Phone = string & { readonly brand: unique symbol };
export type FirstName = string & { readonly brand: unique symbol };
export type LastName = string & { readonly brand: unique symbol };
export type NickName = string & { readonly brand: unique symbol };
export type Introduction = string & { readonly brand: unique symbol };
export type About = string & { readonly brand: unique symbol };

@Entity({
  name: 'my_profile',
})
export class MyProfile {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  my_profile_id?: number;

  @Column({ type: 'varchar', length: 30 })
  email: Email;

  @Column({ type: 'varchar', length: 20 })
  phone: Phone;

  @Column({ type: 'varchar', length: 10 })
  first_name: FirstName;

  @Column({ type: 'varchar', length: 10 })
  last_name: LastName;

  @Column({ type: 'varchar', length: 20 })
  nick_name: NickName;

  @Column({ type: 'varchar', length: 500 })
  introduction: Introduction;

  @Column({ type: 'varchar', length: 5000 })
  about: About;

  @Column({ type: 'varchar', length: 200 })
  image_url: string;
}
