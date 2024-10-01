export type Organization = string & { readonly brand: unique symbol };
export type Designation = string & { readonly brand: unique symbol };
export type StartingDate = Date & { readonly brand: unique symbol };
export type EndingDate = Date & { readonly brand: unique symbol };
export type WorkDescription = string & { readonly brand: unique symbol };

export interface Experience {
  experienceId: number;
  organization: Organization;
  designation: Designation;
  startingDate: StartingDate;
  endingDate: EndingDate;
  workDescription: WorkDescription;
}
