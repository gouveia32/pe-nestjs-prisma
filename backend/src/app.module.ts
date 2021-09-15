import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PatientModule],
})
export class AppModule {}
