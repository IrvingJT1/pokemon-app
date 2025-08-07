import type { RootOptions } from "react-dom/client";
import { pokemonApi } from "../../../api/pokemonApi";
import type { AppDispatch, RootState } from "../../store";
import { setPokemons, startLoadingFilteredPokemons, startLoadingPokemons } from "./pokemonSlice"
import type { Pokemon } from "../../../interfaces/Pokemon";


const getPokemonInfo = async(obtainedPokemons:Pokemon[]) => {

    const resp =  await Promise.all( obtainedPokemons.map(async (pokemon: Pokemon)=>{

        const url = pokemon.url;
        const parsed = new URL(url);

        const parts = parsed.pathname.split('/').filter(Boolean); 
        const lastUrlPart = `${parts[2]}/${parts[3]}`; 

        const { data } = await pokemonApi.get(`/${lastUrlPart}`);
        const { id, name, height, weight, sprites, types } = data as Pokemon;

        return{
            ...pokemon,
            id, 
            name, 
            height, 
            weight, 
            photo: sprites.front_default,
            types
        } as Pokemon;

    }));

    return resp;
}

export const getPokemons = (page = 0) => {

  return async ( dispatch: AppDispatch, getState: RootOptions ) => {
    dispatch( startLoadingPokemons() );

    try {
        const { data, status } = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`);

        if(status !== 200)
        {
            alert('No hubo resultados')

            return;
        }

        const resp = await getPokemonInfo(data.results);

        dispatch( setPokemons({
        pokemons: resp,
        page: page + 1
        }) );
    } 
    catch (error) 
    {
        alert('Error durante la consulta de datos')
    } 
        
  }

}

const getFilteredPokemonInfo = async(obtainedPokemons:Pokemon[]) => {

    const resp =  await Promise.all( obtainedPokemons.map(async (pokemon: Pokemon)=>{

        const url = pokemon.url;
        const parsed = new URL(url);

        const parts = parsed.pathname.split('/').filter(Boolean); 
        const lastUrlPart = `${parts[2]}/${parts[3]}`; 

        const { data } = await pokemonApi.get(`/${lastUrlPart}`);
        const { id, name, height, weight, sprites, types } = data as Pokemon;

        return{
            pokemon,
            id,
            name,
            height,
            weight,
            photo: sprites.front_default,
            types
        } as unknown as Pokemon;

    }));

    return resp;
}

export const getFilteredPokemons = ( searchParam: string, page: number = 0 ) => {

    return async ( dispatch: AppDispatch, getState: RootOptions ) => {
    dispatch( startLoadingFilteredPokemons() );

    try {
        const { data, status } = await pokemonApi.get(`/pokemon?limit=1302`);

        if(status !== 200)
        {
            alert('No hubo resultados')

            return;
        }
        const filteredNames:Pokemon[] = data.results.filter((pokemon:Pokemon)=> pokemon.name.toLowerCase().includes(searchParam.toLowerCase()));
        const filteredResp = await getFilteredPokemonInfo(filteredNames);

        dispatch( setPokemons({
            page: page,
            pokemons: filteredResp,
        }) );
    } 
    catch (error) 
    {
        alert('Error durante la consulta de datos')
    } 
        
  }

}


