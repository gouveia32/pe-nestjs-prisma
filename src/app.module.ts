import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PokemonModule,PacienteModule],
})
export class AppModule {}
