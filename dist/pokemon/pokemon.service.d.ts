import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class PokemonService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    }>;
    update(id: number, data: UpdatePokemonDto): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon & {
        images: {
            url: string;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PokemonClient<import(".prisma/client").Pokemon>;
}
