import { useLocation } from 'react-router';
import noImage from '../assets/descarga.jpeg';

export const PokeDetails = () => {

    
    const location = useLocation();
    const {pokemon} = location.state || {};
    

    return (

        <div className="container">
            <h1>PokemonApp</h1>
            <hr />
            <div className="card bg-dark text-white border-white w-25 my-5 position-absolute top-50 start-50 translate-middle">
                <img src={pokemon.photo? pokemon.photo : noImage } className="card-img-top" alt={pokemon.name}/>
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
                    <p className="card-text">Se muestra a continuación información del pokemon</p>
                </div>
                <ul className="list-group list-group-flush bg-dark text-white border-white">
                    <li className="list-group-item bg-dark text-white border-white">Pokemon Id: {pokemon.id}</li>
                    <li className="list-group-item bg-dark text-white border-white"> 
                        {pokemon.types.length === 2 ? `Tipos: ${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`: `Tipo: ${pokemon.types[0].type.name}`} 
                        
                    </li>
                    <li className="list-group-item bg-dark text-white border-white">Altura: {pokemon.height * 10} cm</li>
                    <li className="list-group-item bg-dark text-white border-white">Peso: {pokemon.weight} lbs.</li>
                </ul>
            </div>
        </div>

        
    )
}
