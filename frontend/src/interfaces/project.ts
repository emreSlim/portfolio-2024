export type ProjectName = string & { readonly brand: unique symbol };
export type ProjectDescription = string & { readonly brand: unique symbol };
export type ProjectUrl = string & { readonly brand: unique symbol };
export type ProjectMediaUrl = string & { readonly brand: unique symbol };
export type ProjectSourceCodeUrl = string & { readonly brand: unique symbol };

export interface Project {
  projectId: number;
  name: ProjectName;
  description: ProjectDescription;
  url: ProjectUrl;
  mediaUrl: ProjectMediaUrl;
  sourceCodeUrl: ProjectSourceCodeUrl;
}
