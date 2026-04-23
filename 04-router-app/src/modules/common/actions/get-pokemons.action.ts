import pokemonApi from '@/modules/common/api/pokemon.api';
import { type PokemonsResponse } from '../interfaces/pokemon-list.response.interface';
import type { Pokemon } from '../interfaces/pokemon.interface';

const formatPokemons = (pokemons: PokemonsResponse): Pokemon[] => {
    return pokemons.results.map((pokemon) => {
        const pokemonId = pokemon.url.split('/').at(-2) ?? 0;
        return {
            id: <number>pokemonId,
            name: pokemon.name,
        };
    });
};

export const getPokemons = async (howMany: number = 151): Promise<Pokemon[]> => {
    const { data } = await pokemonApi.get<PokemonsResponse>(`/?limit=${howMany}`);
    const pokemons = formatPokemons(data);
    return pokemons;
};
