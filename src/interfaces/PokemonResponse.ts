import type { Pokemon } from "./Pokemon";

export interface PokemonResponse{
    page: number,
    pokemons: Array<Pokemon>,
}