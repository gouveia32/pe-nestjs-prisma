import { Prisma } from '@prisma/client';
import internal from 'stream';

export class Patient implements Prisma.patientUncheckedCreateInput {
  patient_id?: number;
  name: string;
  telephone: string;
  birth_date: string;
  gender: string;
  weight?: number;
  height?: number;
}
