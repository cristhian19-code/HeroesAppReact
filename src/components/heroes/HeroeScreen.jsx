import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroeScreen = ({history}) => {
    const {heroId} = useParams();

    const hero = useMemo(() => getHeroesById(heroId), [heroId]);
    if(!hero) return <Redirect to="/"/>
    
    //desestructurando
    const handleReturn = ()=>{
        history.goBack()
    }

    const {
        id,
        superhero,
        alter_ego,
        first_appearance,
        publisher,
        characters
    } = hero;

    return (
        <div className="card m-1 rounded">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`../assets/heroes/${id}.jpg`} alt={superhero} className="card-img rounded animate__animated animate__fadeInLeft"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3>{superhero}</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{backgroundColor: 'transparent',color: 'black'}}>Alter ego: {alter_ego}</li>
                            <li className="list-group-item" style={{backgroundColor: 'transparent',color: 'black'}}>First Appearance: {first_appearance}</li>
                            <li className="list-group-item" style={{backgroundColor: 'transparent',color: 'black'}}>Publisher: {publisher}</li>
                            <li className="list-group-item" style={{backgroundColor: 'transparent',color: 'black'}}>Characters: {characters}</li>
                        </ul>
                        <button className="btn btn-outline-info mt-2" onClick={handleReturn}>
                            Atras
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
