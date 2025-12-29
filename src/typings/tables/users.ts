export interface User {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  password: string;
  baseRole: number | null;
  situation: number;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
}
