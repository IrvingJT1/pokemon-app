import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Pokemon } from '../../../interfaces/Pokemon';
import type { PokemonResponse } from '../../../interfaces/PokemonResponse';

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