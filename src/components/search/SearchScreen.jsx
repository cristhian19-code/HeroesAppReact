import React from 'react'
import { heroes } from '../../data/heroes'
import { useInput } from '../../hook/useInput'
import { HeroItem } from '../heroes/HeroItem'

export const SearchScreen = () => {
    const {input:{hero},handleChangeInput} = useInput({hero:''})

    const filter = heroes.filter(item => item.superhero.toLowerCase().includes(hero.toLowerCase()));

    return (
        <div className="d-flex flex-wrap justify-content-center">
            <div className="col-12 col-md-4 text-center">
                <h1>Search Hero</h1>
                <input name="hero" value={hero} onChange={handleChangeInput} type="text" className="form-control" placeholder="Search hero.."/>
            </div>
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center mt-3 mt-md-0">
                {
                    hero.length>0 
                    ? filter.map(hero => {
                        return <HeroItem key={hero.superhero} {...hero} /> 
                    })
                    : <p className="display-5">Busque un Heroe..</p>
                }
                
            </div>
        </div>
    )
}
