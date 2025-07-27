import './index.css'
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredPokemons, getPokemons } from "./store/slices/pokemon";
import type { RootState } from "./store/store";
import { PokemonCard } from './components/PokemonCard';

import runningPickachu from './assets/running-pikachu-transparent-snivee.gif';


const PokemonApp = () => {

  const hasFetched = useRef( localStorage.getItem('hasFetched')? true : false );
  const dispatch = useDispatch();
  const { isLoading, pokemons=[], page } = useSelector( (state:RootState) => state.pokemons)
  

  //Carga inicial
  useEffect(() => {

    //Se usa para evitar contratiempos con el modo estricto y la recarga de la página
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
  
  //Se usa para el infinite scroll
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


  //Se usa para ejecutarse acorde al cambio de valor en el input
  //Después de escribir se presiona enter y debe ejecutarse el filtro
  const handleInputChange = (e:InputEvent) =>{
    
    const searchParam = e.target.value;

    if(e.key === 'Enter')
    {
      dispatch(getFilteredPokemons(searchParam));
    }


  }

  return (
    <div className='container'>
        <h1>PokemonApp</h1>
        <hr />

        <input className="w-30 mb-2 ms-2 form-control" 
        type="text" 
        placeholder='Búsqueda de pókemon (presione enter para iniciar búsqueda)' 
        onKeyDown={(e) => handleInputChange(e)}/>

        <div>
          <span className="w-25 mb-2 ms-2">
            {
              isLoading ? 
              <img className='w-22 position-absolute top-50 start-50 translate-middle' src={runningPickachu} alt="running_pickachu" />
              :
              ''
            }
          </span>
        </div>

        <div className='container'>
            <div className='row'>
            {

                pokemons.length === 0?
                  isLoading? '' : 'No se encontraron resultados'
                  :
                pokemons.map((pokemon) => (
                    <div key={pokemon.name} className='col-md-4 col-lg-3 mb-2'> 
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