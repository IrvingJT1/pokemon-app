
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

export interface Pokemon{
    url: string
    id: number,
    name: string,
    height: number,
    weight: number,
    sprites: SpritesObject,
    types: Slots[],
    photo: string
}