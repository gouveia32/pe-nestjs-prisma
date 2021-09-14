import { Prisma } from '@prisma/client';

export class Paciente implements Prisma.PacienteUncheckedCreateInput {
  id?: number;
  nome: string;
  cpf?: string;
  email?: string;
  data_nascimento?: string;
  data_cadastro?: string;
  peso?: number;
  altura?: number;
  tipo_sanguineo: string;
  status?: number;
}
