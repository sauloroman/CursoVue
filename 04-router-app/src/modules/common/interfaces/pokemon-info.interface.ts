export interface PokemonItem {
    id: number;
    name: string;
    image: string;
    types: {
        type: string;
        slot: number;
    }[];
    abilities: {
        main: string;
        hidden?: string;
    };
    signatureMove: string;
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
    };
    height: number;
    weight: number;
    baseExperience: number;
}
