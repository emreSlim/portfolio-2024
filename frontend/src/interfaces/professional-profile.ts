export type URL = string & { readonly brand: unique symbol };
export type PlatformName = string & { readonly brand: unique symbol };

export interface ProfessionalProfile {
  professionalProfileId: number;
  platformName: PlatformName;
  url: URL;
}
