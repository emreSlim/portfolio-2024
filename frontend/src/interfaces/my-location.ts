export type Country = string & { readonly brand: unique symbol };
export type City = string & { readonly brand: unique symbol };
export type State = string & { readonly brand: unique symbol };
export type LocationType = 'current' | 'permanent';

export interface MyLocation {
  locationId: number;
  city: City;
  state: State;
  country: Country;
  locationType: LocationType;
}
