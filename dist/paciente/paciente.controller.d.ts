import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
export declare class PacienteController {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    create(createPacienteDto: CreatePacienteDto): import(".prisma/client").Prisma.Prisma__PacienteClient<import(".prisma/client").Paciente>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Paciente[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PacienteClient<import(".prisma/client").Paciente>;
    update(id: string, updatePacienteDto: UpdatePacienteDto): import(".prisma/client").Prisma.Prisma__PacienteClient<import(".prisma/client").Paciente>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PacienteClient<import(".prisma/client").Paciente>;
}
