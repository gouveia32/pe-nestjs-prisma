import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class PacienteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePacienteDto): import(".prisma/client").Prisma.Prisma__PacienteClient<import(".prisma/client").Paciente>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Paciente[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PacienteClient<import(".prisma/client").Paciente>;
    update(id: number, data: UpdatePacienteDto): import(".prisma/client").Prisma.Prisma__PacienteClient<import(".prisma/client").Paciente>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PacienteClient<import(".prisma/client").Paciente>;
}
