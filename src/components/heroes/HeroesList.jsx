import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroItem } from './HeroItem'

export const HeroesList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    return (
        <div className="d-flex justify-content-center flex-wrap animate__animated animate__fadeIn">
            {
                heroes.map((hero)=>{
                    return(
                        <HeroItem key={hero.id} className="card col-4" {...hero} />
                    )
                })
            }
        </div>
    )
}
