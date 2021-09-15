import { Prisma } from '@prisma/client';
export declare class Pokemon implements Prisma.PokemonUncheckedCreateInput {
    id?: number;
    name: string;
    height?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
