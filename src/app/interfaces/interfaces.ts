export interface Film {
  title: string;
  year: number;
  director: string;
  image: string;
}

export interface Contact {
  firstName: string | null;
  lastName: string | null;
  age: string | null;
  email: string | null;
  comment: string | null;
}
