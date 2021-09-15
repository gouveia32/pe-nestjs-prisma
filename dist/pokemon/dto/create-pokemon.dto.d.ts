import { Pokemon } from '../entities/pokemon.entity';
import { Prisma } from '@prisma/client';
export declare class CreatePokemonDto extends Pokemon {
    name: string;
    height?: number | null;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
