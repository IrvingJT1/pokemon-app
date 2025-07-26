import './index.css'
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
import type { RootState } from "./store/store";
import { PokemonCard } from './components/PokemonCard';


const PokemonApp = () => {
    
  const hasFetched = useRef(false);
  const dispatch = useDispatch();
  const { isLoading, pokemons=[], page } = useSelector( (state:RootState) => state.pokemons)

  useEffect(() => {

    if(!hasFetched.current)
    {
        dispatch( getPokemons() );
        hasFetched.current = true;
    }

  }, [dispatch]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // Carga más si estás cerca del fondo (300px antes de llegar)
      if (scrollTop + windowHeight >= fullHeight - 300 && !isLoading && page>0) {
        console.log('Effect secunario')
        dispatch(getPokemons(page)); // pasa el número de página actual
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  },[dispatch, isLoading, page]);
//   const infiniteScroll = (e) => {

//   }

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />

        <span>
            {isLoading ? 'Loading...':''}
        </span>

        <div className='container'>
            <div className='row'>
            {
                pokemons.map((pokemon) => (
                    <div key={pokemon.name} className='col-md-4 mb-2'> 
                        <PokemonCard pokemon={pokemon}/>
                    </div>
                ))
            }
            </div>
        </div>
    </>
)
}

export default PokemonApp;