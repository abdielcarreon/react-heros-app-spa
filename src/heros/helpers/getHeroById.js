import { heros } from "../data/heros"


export const getHeroById = ( id ) => {
  
    return heros.find( heros => heros.id === id );
}

