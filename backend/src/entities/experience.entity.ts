import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type Organization = string & { readonly brand: unique symbol };
export type Designation = string & { readonly brand: unique symbol };
export type StartingDate = Date & { readonly brand: unique symbol };
export type EndingDate = Date & { readonly brand: unique symbol };
export type WorkDescription = string & { readonly brand: unique symbol };

@Entity({
  name: 'experience',
})
export class Experience {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  experience_id?: number;

  @Column({ type: 'varchar', length: 100 })
  organization: Organization;

  @Column({ type: 'varchar', length: 100 })
  designation: Designation;

  @Column({ type: 'date' })
  starting_date: StartingDate;

  @Column({ type: 'date', nullable: true })
  ending_date: EndingDate;

  @Column({ type: 'varchar', length: 1000 })
  work_description: WorkDescription;
}
