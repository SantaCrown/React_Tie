import { IsEmail, IsString } from 'class-validator';

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
}
