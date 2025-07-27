import { Link } from "react-router";
import noImage from '../assets/descarga.jpeg';
import type { Pokemon } from "../interfaces/Pokemon";

interface PokemonProps{
    pokemon: Pokemon
}

export const PokemonCard = ({pokemon}: PokemonProps) => {
  return (
    <div className="card bg-dark text-white border-white">
    <img src={pokemon.photo? pokemon.photo : noImage } className="card-img-top" alt={pokemon.name}/>
        <div className="card-body">
            <h5 className="card-title">{ pokemon.name.toUpperCase() }</h5>
            <p className="card-text">Para más info, dar click en el botón </p>
            <Link to="/details" className="btn btn-primary" state={{ pokemon }}>Ir a detalle</Link>
        </div>
    </div>
  )
}



