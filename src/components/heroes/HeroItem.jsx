import React from 'react'
import {Link} from 'react-router-dom'
export const HeroItem = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
}) => {
    return (
        <div className="card m-1 rounded"  style={{width:440}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} alt={superhero} className="card-img rounded"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        <p className="card-text text-muted">{first_appearance}</p>
                        <Link className="btn btn-outline-success" to={`./hero/${id}`}>
                            Ver mas..
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
