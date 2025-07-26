import { Link } from "react-router";

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

interface PokemonProps{
    pokemon: Pokemon
}

export const PokemonCard = ({pokemon}: PokemonProps) => {
  return (
    <div className="card">
    <img src={pokemon.photo} className="card-img-top" alt={pokemon.name}/>
        <div className="card-body">
            <h5 className="card-title">{ pokemon.name.toUpperCase() }</h5>
            <p className="card-text">Para más info, dar click en el botón </p>
            <Link to="/details" className="btn btn-primary" state={{ pokemon }}>Ir a detalle</Link>
        </div>
    </div>
  )
}



