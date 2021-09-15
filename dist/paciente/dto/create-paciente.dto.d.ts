import { Paciente } from '../entities/paciente.entity';
export declare class CreatePacienteDto extends Paciente {
    nome: string;
    cpf: string;
    email: string;
    peso?: number | null;
    altura?: number | null;
}
