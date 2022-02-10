export enum AccessType {
  PRIVATE = 'private',
  PUBLIC = 'public'
}


export interface Category {
  id:    number;
  name:  string;
  image: string;
  access?: AccessType;
}
