import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(createPokemonDto: CreatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    }>;
    update(id: string, updatePokemonDto: UpdatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon>;
}
