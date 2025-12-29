
export enum Page {
  LISTING = 'listing',
  DETAIL = 'detail',
  PROFILE = 'profile',
  AUTH = 'auth',
  VIRTUAL_TOUR = 'virtual-tour'
}

export interface Property {
  id: string;
  title: string;
  price: string;
  priceNum: number;
  location: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  type: string;
  tags: string[];
  description?: string;
}

export interface User {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
}
