import pokemonApi from '@/modules/common/api/pokemon.api';
import { type PokemonItemResponse } from '../../common/interfaces/pokemon-item.response.interface';
import type { PokemonItem } from '../../common/interfaces/pokemon-info.interface';

export function mapPokemonResponse(pokemon: PokemonItemResponse): PokemonItem {
    return {
        id: pokemon.id,
        name: pokemon.name,

        image: pokemon.sprites.other?.['official-artwork']?.front_default ?? '',

        types: pokemon.types.map((type) => ({
            type: type.type.name,
            slot: type.slot,
        })),

        abilities: {
            main:
                pokemon.abilities.find((ability) => !ability.is_hidden)?.ability?.name ?? 'Unknown',

            hidden: pokemon.abilities.find((ability) => ability.is_hidden)?.ability?.name,
        },

        signatureMove: pokemon.moves[0]?.move?.name ?? 'Unknown',

        stats: {
            hp: pokemon.stats.find((stat) => stat.stat.name === 'hp')?.base_stat ?? 0,

            attack: pokemon.stats.find((stat) => stat.stat.name === 'attack')?.base_stat ?? 0,

            defense: pokemon.stats.find((stat) => stat.stat.name === 'defense')?.base_stat ?? 0,

            speed: pokemon.stats.find((stat) => stat.stat.name === 'speed')?.base_stat ?? 0,
        },

        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        baseExperience: pokemon.base_experience,
    };
}

export const getPokemon = async (pokemonName: string): Promise<PokemonItem> => {
    const { data } = await pokemonApi.get<PokemonItemResponse>(`/${pokemonName}`);
    const pokemon = mapPokemonResponse(data);
    return pokemon;
};
