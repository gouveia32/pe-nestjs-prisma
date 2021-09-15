import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PacienteService {
  constructor(private readonly prisma: PrismaService) {}


  create(data: CreatePacienteDto) {
    return this.prisma.paciente.create({
      data,
    });
  }

  findAll() {
    return this.prisma.paciente.findMany({});
  }

  findOne(id: number) {
    return this.prisma.paciente.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdatePacienteDto) {
    return this.prisma.paciente.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.paciente.delete({
      where: { id },
    });
  }
}
