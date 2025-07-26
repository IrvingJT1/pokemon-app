import type { RootOptions } from "react-dom/client";
import { pokemonApi } from "../../../api/pokemonApi";
import type { AppDispatch, RootState } from "../../store";
// import type { AppDispatch, RootState } from "../../store";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

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
    results: Pokemon[];
    page: number,
    pokemons: Array<Pokemon> 
}

const getPokemonInfo = async(obtainedPokemons:Pokemon[]) => {

    const resp =  await Promise.all( obtainedPokemons.map(async (pokemon: Pokemon)=>{

        const url = pokemon.url;
        const parsed = new URL(url);

        const parts = parsed.pathname.split('/').filter(Boolean); 
        const lastUrlPart = `${parts[2]}/${parts[3]}`; 

        const { data } = await pokemonApi.get(`/${lastUrlPart}`);
        const { id, name, height, weight, sprites } = data as Pokemon;

        return{
            ...pokemon,
            id, 
            name, 
            height, 
            weight, 
            photo: sprites.front_default
        } as Pokemon;

    }));

    return resp;
}

export const getPokemons = (page = 0) => {

  return async ( dispatch: AppDispatch, getState: RootOptions ) => {
    dispatch( startLoadingPokemons() );

    try {
        const { data, status } = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`);

        console.log(data)

        if(status !== 200)
        {
            alert('No hubo resultados')

            return;
        }

        // if(page < data.results.length / 10 )
        // {
        //     return;
        // }

        console.log(data.results)

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

// export const getPokemonInfo = (id = 0) => {

//   return async ( dispatch: AppDispatch, getState: RootOptions ) => {
//     dispatch( startLoadingPokemons() );

//     try {
//         const { data, status } = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`);

//         console.log(data)

//         if(status !== 200)
//         {
//             alert('No hubo resultados')
//         }

//         dispatch( setPokemons({
//         pokemons: data.results,
//         page: page + 1
//         }) );
//     } 
//     catch (error) 
//     {
//         alert('Error durante la consulta de datos')
//     } 
        
//   }

// }
