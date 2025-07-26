import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SpritesObject{
    front_default: string;
}

interface Pokemon{
    url: string
    id: number,
    name: string,
    height: number,
    weight: number,
    sprites: SpritesObject,
    photo: string
}

interface PokemonResponse{
    page: number,
    pokemons: Array<Pokemon> 
}

export const pokemonSlice = createSlice({
   name: 'pokemon',
   initialState: {
        page: 0,
        pokemons: [] as Array<Pokemon>,
        isLoading: false
   },
   reducers: {
      startLoadingPokemons: (state) => {
        state.isLoading = true;
      },
      setPokemons: (state, action: PayloadAction<PokemonResponse>)=>{
        state.isLoading=false;
        state.page = action.payload.page;
        state.pokemons = [...state.pokemons, ...action.payload.pokemons];
      }
   }
});


export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;