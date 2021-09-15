import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PatientService {
  constructor(private readonly prisma: PrismaService) {}


  create(data: CreatePatientDto) {
    return this.prisma.patient.create({
      data,
    });
  }

  findAll() {
    return this.prisma.patient.findMany({});
  }

  findOne(patient_id: number) {
    return this.prisma.patient.findUnique({
      where: { patient_id },
    });
  }

  update(patient_id: number, data: UpdatePatientDto) {
    return this.prisma.patient.update({
      where: { patient_id },
      data,
    });
  }

  remove(patient_id: number) {
    return this.prisma.patient.delete({
      where: { patient_id },
    });
  }
}
