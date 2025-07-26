import { useLocation } from 'react-router';

export const PokeDetails = () => {

    
    const location = useLocation();
    const {pokemon} = location.state || {};
    

    return (

        <div className="card w-25 position-absolute top-50 start-50 translate-middle">
            <img src={pokemon.photo} className="card-img-top" alt={pokemon.name}/>
            <div className="card-body">
                <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
                <p className="card-text">Se muestra a continuación información del pokemon</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Pokemon Id: {pokemon.id}</li>
                <li className="list-group-item"> 
                    {pokemon.types.length === 2 ? `Tipos: ${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`: `Tipo: ${pokemon.types[0].type.name}`} 
                    
                </li>
                <li className="list-group-item">Altura: {pokemon.height * 10} cm</li>
                <li className="list-group-item">Peso: {pokemon.weight} lbs.</li>
            </ul>
        </div>
    )
}
