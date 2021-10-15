import {heroes} from '../data/heroes'


export const getHeroesByPublisher = (publisher)=>{
    const validPublished = ['DC Comics','Marvel Comics'];

    if(!validPublished.includes(publisher)){
        throw new Error(`Publisher ${publisher} no encontrado`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}