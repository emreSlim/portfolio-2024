import { MyLocation } from './my-location';
import { ProfessionalProfile } from './professional-profile';

export type Email = string & { readonly brand: unique symbol };
export type Phone = string & { readonly brand: unique symbol };
export type FirstName = string & { readonly brand: unique symbol };
export type LastName = string & { readonly brand: unique symbol };
export type NickName = string & { readonly brand: unique symbol };
export type Introduction = string & { readonly brand: unique symbol };
export type About = string & { readonly brand: unique symbol };

export interface MyProfile {
  myProfileId: number;
  firstName: FirstName;
  lastName: LastName;
  nickName: NickName;
  email: Email;
  phone: Phone;
  introduction: Introduction;
  about: About;
  imageUrl: string;
  locations: MyLocation[];
  professionalProfiles: ProfessionalProfile[];
}
