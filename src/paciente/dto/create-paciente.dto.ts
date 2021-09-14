import { Paciente } from '../entities/paciente.entity';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreatePacienteDto extends Paciente {
  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  email: string;


  @IsInt()
  @IsOptional()
  peso?: number | null;

  @IsInt()
  @IsOptional()
  altura?: number | null;
}
