import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SpritesObject{
    front_default: string;
}

interface Type{
  name:string;
}

interface Slots{
  slot:string,
  type: Type;
}

interface Pokemon{
    url: string
    id: number,
    name: string,
    height: number,
    weight: number,
    sprites: SpritesObject,
    types: Slots[],
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
        isLoading: false,
   },
   reducers: {
      startLoadingPokemons: (state) => {
        state.isLoading = true;
      },
      startLoadingFilteredPokemons: (state) => {
        state.isLoading = true;
        state.pokemons = [];
      },
      setPokemons: (state, action: PayloadAction<PokemonResponse>)=>{
        state.isLoading=false;
        state.page = action.payload.page;
        state.pokemons = [...state.pokemons, ...action.payload.pokemons];
      },
   }
});


export const { startLoadingPokemons, setPokemons, startLoadingFilteredPokemons } = pokemonSlice.actions;