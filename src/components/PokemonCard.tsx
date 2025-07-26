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
            <a href="#" className="btn btn-primary">Ir a detalle</a>
        </div>
    </div>
  )
}



