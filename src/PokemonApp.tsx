import './index.css'
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredPokemons, getPokemons } from "./store/slices/pokemon";
import type { RootState } from "./store/store";
import { PokemonCard } from './components/PokemonCard';


const PokemonApp = () => {

  const hasFetched = useRef( localStorage.getItem('hasFetched')? true : false );
  const dispatch = useDispatch();
  const { isLoading, pokemons=[], page } = useSelector( (state:RootState) => state.pokemons)
  

  useEffect(() => {

    const handleRefresh= () => {
      localStorage.removeItem('hasFetched');
    }

    window.addEventListener('beforeunload', handleRefresh);

    if(!hasFetched.current)
    {
        dispatch( getPokemons() );

        hasFetched.current = true;

        localStorage.setItem('hasFetched', 'true');
    }

  return () => 
  {
    window.removeEventListener('beforeunload', handleRefresh);
  };

  }, [dispatch]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      
      if (scrollTop + windowHeight >= fullHeight - 300 && !isLoading && page>0) {
        dispatch(getPokemons(page)); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  },[dispatch, isLoading, page]);


  const handleInputChange = (e:InputEvent) =>{
    
    const searchParam = e.target.value;

    if(e.key === 'Enter')
    {
      console.log('Entra aqui')
      dispatch(getFilteredPokemons(searchParam));
    }

    console.log(pokemons)

  }

  return (
    <div className='container'>
        <h1>PokemonApp</h1>
        <hr />

        <input className="w-25 mb-2 ms-2" type="text" placeholder='Busqueda de pokemon' onKeyDown={(e) => handleInputChange(e)}/>

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
    </div>
)
}

export default PokemonApp;