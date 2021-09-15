import { Patient } from '../entities/patient.entity';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreatePatientDto extends Patient {
  @IsString()
  name: string;

  @IsString()
  telephone: string;

  @IsString()
  birth_date: string;

  @IsString()
  gender: string;

  @IsInt()
  @IsOptional()
  weight?: number | null;

  @IsInt()
  @IsOptional()
  height?: number | null;
}
